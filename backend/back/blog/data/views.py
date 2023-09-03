from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from .models import *
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from .serializers import *


@csrf_exempt
def auth(request):
    if request.method=='GET':
        data=JSONParser().parse(request)['body']
        username=data['username']
        password=data['password']
        obj=appuser.objects.filter(username=username,password=password)
        if obj:
            link_serializer=AppUserSerializer(obj[0])
            return JsonResponse(link_serializer.data,safe=False)
        else:
            return JsonResponse({"message":"No match"})
    elif request.method=='POST':
        data=JSONParser().parse(request)['body']
        print(data)
        username=data['username']
        obj=appuser.objects.filter(username=username)
        print(obj)
        if obj:
            return JsonResponse({"message":"User Already Exists"})
        link_serializer=AppUserSerializer(data=data)
        if link_serializer.is_valid():
            link_serializer.save()
            return JsonResponse({"message":"ADDED"})
        else:
            return JsonResponse({"message":"Failed"})
        
@csrf_exempt
def blo(request,id=-1):
    if request.method=="GET":
        if id!=-1:
            obj=blog.objects.filter(bid=id)
            if obj:
                obj_serializer = BlogSerializer(obj[0])
                return JsonResponse(obj_serializer.data,safe=False)
            else:
                return JsonResponse({"message":"object not found"})
        else:
            obj=blog.objects.filter(state=True)
            obj_serializer = BlogSerializer(obj, many=True)
            return JsonResponse(obj_serializer.data,safe=False)
    elif request.method=="POST":
        data=JSONParser().parse(request)['body']
        uid=data["uid"]
        title=data["title"]
        text=data["text"]
        btype=data["btype"]
        appObj=appuser.objects.filter(uid=uid)
        if appObj:
            obj=blog.objects.create(uid=appObj[0],title=title,text=text,btype=btype,state=False)
            obj.save()
            return JsonResponse({"message":"added"})
        else:
            return JsonResponse({"message": "user not found"})
        
@csrf_exempt
def admin(request,id=-1,value=-1):
    if request.method=="POST":
        obj=blog.objects.filter(bid=id)
        if obj:
            if value==1:
                obj.state=True
                obj.save()
            else:
                obj.delete()
            return JsonResponse({"message":"done"})
        else:
            return JsonResponse({"message":"Object not found"})

    elif request.method=="GET":
        obj=blog.objects.filter(state=False)
        obj_serializer = BlogSerializer(obj,many=True)
        return JsonResponse(obj_serializer.data,safe=False)

@csrf_exempt
def update(request,uid=-1,id=-1):
    if request.method=="GET":
        if uid!=-1:
            obj=blog.objects.filter(uid=uid)
            obj_serializer = BlogSerializer(obj,many=True)
            return JsonResponse(obj_serializer.data,safe=False)
        else:
            return JsonResponse({"message":"user not found"})
    if request.method=="POST":
        data=JSONParser().parse(request)['body']
        bid=data["bid"]
        title=data["title"]
        text=data["text"]
        btype=data["btype"]
        obj=blog.objects.filter(bid=bid)[0]
        if obj:
            obj.title=title
            obj.text=text
            obj.btype=btype
            obj.save()
            return JsonResponse({"message":"done"})
        else:
            return JsonResponse({"message":"blog not found"})
    if request.method=="DELETE":
        data=JSONParser().parse(request)['body']
        bid=data["bid"]
        obj=blog.objects.filter(bid=bid)
        if obj:
            obj.delete()
            return JsonResponse({"message":"done"})
        else:            
            return JsonResponse({"message":"blog not found"})

@csrf_exempt
def change(request,id=-1,value=-1):
    if request.method=="POST":
        obj=blog.objects.filter(bid=id)[0]
        if obj:
            if value==1:
                obj.state=True
                obj.save()
            else:
                obj.delete()
            return JsonResponse({"message":"done"})
        else:
            return JsonResponse({"message":"Object not found"})