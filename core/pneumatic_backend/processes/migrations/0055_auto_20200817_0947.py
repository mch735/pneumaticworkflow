# Generated by Django 2.2.15 on 2020-08-17 09:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('processes', '0054_auto_20200810_1236'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='url',
            field=models.URLField(max_length=2000, null=True),
        ),
        migrations.AlterField(
            model_name='taskworkflow',
            name='url',
            field=models.URLField(max_length=2000, null=True),
        ),
    ]
