# Generated by Django 2.2.5 on 2019-10-03 10:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0006_userinvite'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userinvite',
            name='email',
            field=models.EmailField(max_length=254, unique=True),
        ),
    ]
