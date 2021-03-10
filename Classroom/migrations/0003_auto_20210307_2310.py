# Generated by Django 3.1.1 on 2021-03-07 23:10

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Classroom', '0002_auto_20210306_0250'),
    ]

    operations = [
        migrations.RenameField(
            model_name='lesson',
            old_name='date',
            new_name='start_date',
        ),
        migrations.AddField(
            model_name='lesson',
            name='end_date',
            field=models.DateField(blank=True, default=datetime.datetime(2021, 3, 7, 23, 8, 25, 227869)),
        ),
    ]
