from django.db import models

from django.db import models
from users.models import User

class Project(models.Model):
    name = models.CharField(max_length=64, unique=True)
    users = models.ManyToManyField(User)
    repository = models.URLField(blank=True)

    def __str__(self):
        return self.name

class TODOManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(deleted=False,project__in=Project.objects.all())

class TODO(models.Model):
    objects=TODOManager()
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    text = models.TextField()
    create = models.DateTimeField(auto_now_add=True)
    update = models.DateTimeField(auto_now=True)
    creator = models.ForeignKey(User, models.PROTECT)
    is_active = models.BooleanField(default=True)
    deleted=models.BooleanField(default=False)
