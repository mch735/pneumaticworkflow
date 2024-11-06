# Generated by Django 2.2.28 on 2022-09-20 17:02
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('processes', '0165_auto_20220919_1518'),
    ]

    operations = [
        migrations.AddField(
            model_name='templateintegrations',
            name='api_date',
            field=models.DateTimeField(null=True, verbose_name='Last "API" activation date'),
        ),
        migrations.AddField(
            model_name='templateintegrations',
            name='webhooks_date',
            field=models.DateTimeField(null=True, verbose_name='Last "webhooks" activation date'),
        ),
        migrations.AddField(
            model_name='templateintegrations',
            name='zapier_date',
            field=models.DateTimeField(null=True, verbose_name='Last "zapier" activation date'),
        ),

        migrations.AlterField(
            model_name='templateintegrations',
            name='shared_date',
            field=models.DateTimeField(null=True, verbose_name='Last "shared" activation date'),
        ),
    ]
