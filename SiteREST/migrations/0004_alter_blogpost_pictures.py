# Generated by Django 4.1.5 on 2023-01-31 02:38

import SiteREST.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('SiteREST', '0003_blogpost_status_project_status_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogpost',
            name='pictures',
            field=models.ImageField(default='blogposts/My_img.jpg', upload_to=SiteREST.models.upload_to, verbose_name='Image'),
        ),
    ]
