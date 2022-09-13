from re import A
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder
from .models import AutomobileVO, Technician, Appointment


class AutomobileVODetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "year",
        "color"
    ]


class AppointmentListEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "vin",
        "customer_name",
        "date",
        "time",
        "technician_name",
        "reason",
        "vip",
        "canceled",
        "finished"
    ]

    encoders = {
        "automobile": AutomobileVODetailEncoder(),
        # "technician": TechnicianDetailEncoder(),
    }

    def get_extra_data(self, o):
        if isinstance(o.date, str) and isinstance(o.time, str):
            return {
                "date": o.date,
                "time": o.time,
            }
        else:
            return {
                "date": o.date.isoformat(),
                "time": o.time.isoformat(),
            }

    def get_extra_data(self, o):
        count = AutomobileVO.objects.filter(vin=o.vin).count()
        return {"is_vip": count > 0}


class AppointmentDetailEncoder(ModelEncoder):
    model = Appointment
    properties = [
        # refer to Learn: Automobile Service: Service history: demo img
        "vin",
        "customer_name",
        "date",
        "time",
        "technician_name",
        "reason"
    ]

    encoders = {"": AutomobileVODetailEncoder()}


class TechnicianListEncoder(ModelEncoder):
    model = Technician
    properties = [
        "employee_number",
        "technician_name"
    ]


@require_http_methods(["GET", "POST"])
def list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianListEncoder,
        )
    else: # "POST"
        content = json.loads(request.body)
        try:
            technician = Technician.objects.create(**content)
            return JsonResponse(
                technician,
                encoder=TechnicianListEncoder,
                safe=False,
            )
        except:
            return JsonResponse(
                {"message": "could not create the technician"},
                status=400,
            )


@require_http_methods(["GET", "POST"])
def list_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentListEncoder,
        )
    else: # "POST"
        content = json.loads(request.body)
        print("全部预约详情：", content)
        try:
            technician = Technician.objects.get(id=content['technician'])
            content['technician'] = technician
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid technician id"},
                status=400,
            )
        appointment = Appointment.objects.create(**content)
        return JsonResponse(
            appointment,
            encoder=AppointmentListEncoder,
            safe=False,
        )


@require_http_methods(["GET", "PUT", "DELETE"])
def show_appointment(request, pk):
    appointment = Appointment.objects.get(id=pk)
    if request.method == "GET":
        return JsonResponse(
            appointment,
            encoder=AppointmentDetailEncoder,
            safe=False
        )

    elif request.method == "DELETE":
        count, _ = Appointment.objects.filter(pk=pk).delete()
        return JsonResponse(
            {"deleted": count > 0}
        )

    else: # PUT
        content = json.loads(request.body)
        print("预约详情：", content)
        try:
            appointment = Appointment.objects.get(id=content["vin"])
            content["vin"] = bin

            props = ["owner", "date", "finished", "canceled", "vip"]
            for prop in props:
                if prop in content:
                    setattr(appointment, prop, content[prop])
            appointment.save()
            return JsonResponse(
                appointment,
                encoder=AppointmentDetailEncoder,
                safe=False,
            )
        except Appointment.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
