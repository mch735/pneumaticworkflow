# Generated by Django 2.2 on 2024-11-01 10:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0127_auto_20241008_2241'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='billing_period',
            field=models.CharField(blank=True, choices=[('day', 'day'), ('week', 'week'), ('month', 'month'), ('year', 'year')], default=None, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='account',
            name='billing_plan',
            field=models.CharField(blank=True, default=None, max_length=255, null=True),
        ),
    ]
