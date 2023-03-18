from django.test import TestCase
import json
from rest_framework import status
from rest_framework.test import APIRequestFactory,force_authenticate,APIClient,\
    APITestCase,APISimpleTestCase
from mixer.backend.django import mixer
from django.contrib.auth.models import User
from .views import ProjectModelViewSet
from .models import Project,TODO


