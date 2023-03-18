from django.test import TestCase
import json
from rest_framework import status
from rest_framework.test import APIRequestFactory,force_authenticate,APIClient,\
    APITestCase,APISimpleTestCase
from mixer.backend.django import mixer
from django.contrib.auth.models import User
from .views import ProjectModelViewSet
from .models import Project,TODO



class TestProjectViewset(TestCase):
    def test_get_list(self):
        factory=APIRequestFactory()
        request=factory.get('/api/projects/')
        view= ProjectModelViewSet.as_view({'get':'list'})
        response=view(request)
        self.assertEqual(response.status_code,status.HTTP_200_OK)



