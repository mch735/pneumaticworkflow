# Generated by Django 2.2.13 on 2020-06-17 06:09

import django.contrib.auth.validators
from django.db import migrations
import pneumatic_backend.accounts.fields


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0034_auto_20200616_0932'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='username',
            field=pneumatic_backend.accounts.fields.CharLowerField(error_messages={'unique': 'A user with that username already exists.'}, help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='username'),
        ),
    ]
