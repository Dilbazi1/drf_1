from django.test import TestCase
import json
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, \
    APITestCase, APISimpleTestCase
from mixer.backend.django import mixer
from django.contrib.auth.models import User
from .views import ProjectModelViewSet
from users.views import UserCustomViewSet
from .models import Project, TODO
from users.models import User


class TestProjectViewset(TestCase):
    def test_get_list5(self):
        factory = APIRequestFactory()
        request = factory.get('/api/projects/')
        view = ProjectModelViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
    #
    def test_create_guest4(self):
        factory = APIRequestFactory()
        request = factory.post('api/projects/',
                               {
                                   'name': 'dilbazi'
                               }, format='json')
        view = ProjectModelViewSet.as_view({'post': 'create'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_create_admin4(self):
        factory=APIRequestFactory()
        request=factory.get('api/projects/',
        format='json')
        admin = User.objects.create_superuser(username='admin', password='admin@admin.com',
                                              )
        force_authenticate(request,user=admin)
        view = ProjectModelViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)



class TestProjectViewset(TestCase):
    def test_create_admin1(self):
        factory = APIRequestFactory()

        request = factory.post('/api/users/', {'firs_name': 'Пушкин','last_name':"alexandr",'username':"pushkin",'email':"pushkin@gmail.com"
                                             }, format='json')
        admin = User.objects.create_superuser('admin', 'admin@admin.com',
                                          'admin123456')
        force_authenticate(request, admin)
        view = UserCustomViewSet.as_view({'post': 'create'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_get_detail(self):

        user = User.objects.create(first_name='dilbazi', last_name='mard', email='d@admin.com', username='dilba')
        client=APIClient()
        response=client.get(f'/api/users/{user.id}/')
        self.assertEqual(response.status_code,status.HTTP_200_OK)
    def test_get_detail1(self):

        user = User.objects.create(first_name='dilbazi', last_name='mard', email='d@admin.com', username='dilba')
        client=APIClient()
        response=client.put(f'/api/users/{user.id}/',{'firstname':'ib','email':"email@gmsil.com"})
        self.assertEqual(response.status_code,status.HTTP_401_UNAUTHORIZED)
    def test_edit_admin2(self):
         user=User.objects.create(first_name='dilbazi2', last_name='mard2', email='d2@admin.com', username='dilba2')
         client=APIClient()
         admin = User.objects.create_superuser('admin', 'admin@admin.com',
                                               'admin123456')
         client.login(username='admin',password='admin123456')
         response = client.put(f'/api/users/{user.id}/', {'first_name': 'ib2', 'last_name':'mard2','username':'ib2','email': "email2@gmsil.com"})
         self.assertEqual(response.status_code,status.HTTP_200_OK)
         print(response.data)
         user = User.objects.get(id=user.id)
         self.assertEqual(user.first_name, 'ib2')
         self.assertEqual(user.email,'email2@gmsil.com')
         client.logout()
class TestMath(APISimpleTestCase):
    def test_sqrt(self):
        import math
        self.assertEqual(math.sqrt(4),2)
class TestUserViewset(APITestCase):
    def test_get_list4(self):
        response=self.client.get('/api/users/')
        self.assertEqual(response.status_code,status.HTTP_200_OK)
    def test_get_list2(self):
        response=self.client.get('/api/project/')
        self.assertEqual(response.status_code,status.HTTP_200_OK)
    def test_edit_admin3(self):
        user = User.objects.create(first_name='dilbazi2', last_name='mard2', email='d2@admin.com', username='dilba2')

        admin = User.objects.create_superuser('admin', 'admin@admin.com',
                                              'admin123456')
        self.client.login(username='admin', password='admin123456')
        response=self.client.put(f'/api/users/{user.id}/',{'first_name': 'ib3', 'last_name':'mard3','username':'ib3','email': "email3@gmsil.com"

        })
        self.assertEqual(response.status_code, status.HTTP_200_OK)
    def test_edit_mixer(self):
        user=mixer.blend(User)
        admin = User.objects.create_superuser('admin', 'admin@admin.com',
                                              'admin123456')
        self.client.login(username='admin', password='admin123456')
        response=self.client.put(f'/api/users/{user.id}/',{'first_name': 'ib3', 'last_name':'mard3','username':'ib3','email': "email3@gmsil.com"

        })
        self.assertEqual(response.status_code,status.HTTP_200_OK)



