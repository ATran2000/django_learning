# Generated by Django 4.2.7 on 2024-01-31 20:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_user', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='username',
            field=models.CharField(max_length=50, unique=True),
        ),
    ]
