from django.db import models
from django.conf import settings

# Create your models here.

class Note(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)
    body = models.TextField()

    def __str__(self):
        return self.body[0:50]