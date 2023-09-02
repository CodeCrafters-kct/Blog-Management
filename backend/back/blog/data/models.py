from django.db import models

# Create your models here.

class appuser(models.Model):
    uid=models.AutoField(primary_key=True)
    username = models.CharField(max_length=20)
    password=models.CharField(max_length=512)

class blog(models.Model):
    bid=models.AutoField(primary_key=True)
    uid=models.ForeignKey(appuser,on_delete=models.CASCADE)
    title=models.CharField(max_length=50)
    text=models.CharField(max_length=150)
    btype=models.CharField(max_length=25)
    state=models.BooleanField()