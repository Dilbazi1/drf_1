from django.db import models
from users.models import User


class Project(models.Model):
    name = models.CharField(max_length=64, unique=True)
    users = models.ManyToManyField(User)
    repository=models.URLField(blank=True)




class TODO(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    text=models.TextField()
    create=models.DateTimeField(auto_now_add=True)
    update= models.DateTimeField(auto_now_add=True)
    creator=models.ForeignKey(User, models.PROTECT)
    is_active=models.BooleanField(default=True)




