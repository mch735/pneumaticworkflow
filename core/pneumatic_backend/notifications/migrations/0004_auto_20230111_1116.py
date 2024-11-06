# Generated by Django 2.2.28 on 2023-01-11 11:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notifications', '0003_create_overdue_events'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='device',
            options={'verbose_name': 'Firebase device'},
        ),
        migrations.AddField(
            model_name='device',
            name='description',
            field=models.TextField(blank=True, null=True, verbose_name='Device, OS and browser info'),
        ),
    ]
