from django.test import TestCase
import json
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, \
    APITestCase, APISimpleTestCase, CoreAPIClient
from mixer.backend.django import mixer
from django.contrib.auth.models import User
from todoapp.views import ProjectModelViewSet
from users.views import UserCustomViewSet
from todoapp.models import Project, TODO
from users.models import User



