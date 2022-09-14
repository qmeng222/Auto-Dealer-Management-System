from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder
from .models import AutomobileVO, Technician, Appointment


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "id",
        "vin",
        "year",
        "color"
    ]


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "id",
        "employee_number",
        "technician_name"
    ]


class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "id",
        "vin",
        "customer_name",
        "date",
        "time",
        "technician",
        "reason",
        "vip",
        "canceled",
        "finished"
    ]

    encoders = {
        "automobile": AutomobileVOEncoder(),
        "technician": TechnicianEncoder(),
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


@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder,
        )

    else: # "POST"
        content = json.loads(request.body)
        try:
            technician = Technician.objects.create(**content)
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except:
            return JsonResponse(
                {"message": "could not create the technician"},
                status=400,
            )


@require_http_methods(["GET", "DELETE", "PUT"])
def api_show_technician(request, pk):
    if request.method == "GET":
        try:
            technician = Technician.objects.get(id=pk)
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except:
            return JsonResponse(
                {"message": "could not get the technician"},
                status=404,
            )

    elif request.method == "DELETE":
        count, _ = Technician.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})

    else: # "PUT"
        content = json.loads(request.body)
        print("技工内容：", content)
        try:
            content = json.loads(request.body)
            technician = Technician.objects.get(id=pk)

            props = ["employee_number", "technician_name"]
            for prop in props:
                if prop in content:
                    setattr(technician, prop, content[prop])
            technician.save()
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "technician does not exist"},
                status=404,
            )


@require_http_methods(["GET", "POST"])
def api_list_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentEncoder,
        )

    else:  # "POST"
        content = json.loads(request.body)
        print("预约内容预约内容:", content)
        try:
            technician = Technician.objects.get(id=content['technician_id'])
            content['technician'] = technician
            appointment = Appointment.objects.create(**content)
            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False,
            )
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid technician id"},
                status=400,
            )


        # try:
        #     print("预约详情：", content)
        #     vin = content["vin"]
        #     customer_name = content["customer_name"]
        #     date = content["date"]
        #     time = content["time"]
        #     # technician_name = content["technician_name"]
        #     technician_name = Technician.objects.get(technician_name=content["technician_name"])
        #     content["technician_name"]  = technician_name
        #     reason = content["reason"]
        #     appointment = Appointment.objects.create(**content)
        #     return JsonResponse(
        #         appointment,
        #         encoder=AppointmentEncoder,
        #         safe=False,
        #     )
        # except AutomobileVO.DoesNotExist:
        #     return JsonResponse(
        #         {"message": "could not create the appointment"},
        #         status=400,
        #     )


@require_http_methods(["GET", "PUT", "DELETE"])
def api_show_appointment(request, pk):
    appointment = Appointment.objects.get(id=pk)
    if request.method == "GET":
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
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
                encoder=AppointmentEncoder,
                safe=False,
            )
        except Appointment.DoesNotExist:
            response = JsonResponse({"message": "appointment does not exist"})
            response.status_code = 404
            return response
