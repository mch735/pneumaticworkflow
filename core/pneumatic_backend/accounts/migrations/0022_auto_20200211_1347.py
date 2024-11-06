# Generated by Django 2.2.10 on 2020-02-11 13:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0021_auto_20191213_1037'),
    ]

    operations = [
        migrations.AddField(
            model_name='account',
            name='is_subscribed',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='account',
            name='max_users',
            field=models.IntegerField(default=10),
        ),
    ]
