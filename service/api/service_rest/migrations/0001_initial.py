# Generated by Django 4.0.3 on 2022-09-13 19:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AutomobileVO',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vin', models.CharField(max_length=17, unique=True)),
                ('year', models.PositiveSmallIntegerField()),
                ('color', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Technician',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('employee_number', models.CharField(max_length=50, unique=True)),
                ('technician_name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vin', models.CharField(max_length=17)),
                ('customer_name', models.CharField(max_length=100)),
                ('date', models.DateField()),
                ('time', models.TimeField()),
                ('reason', models.TextField()),
                ('vip', models.BooleanField(default=False)),
                ('canceled', models.BooleanField(default=False)),
                ('finished', models.BooleanField(default=False)),
                ('technician_name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='appointments', to='service_rest.technician')),
            ],
        ),
    ]
