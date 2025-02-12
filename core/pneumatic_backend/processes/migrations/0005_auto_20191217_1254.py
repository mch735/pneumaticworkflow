# Generated by Django 2.2.7 on 2019-12-17 12:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('processes', '0004_auto_20191217_1113'),
    ]

    operations = [
        migrations.AddField(
            model_name='stepfield',
            name='name',
            field=models.CharField(max_length=64),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='process',
            name='process_def',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='processes', to='processes.ProcessDef'),
        ),
    ]
