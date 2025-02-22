<<<<<<< HEAD

import pandas as pd
import json
from fastapi import APIRouter, Depends
from fastapi_users import FastAPIUsers
from set_json_data import  set_new_json
from auth.auth import auth_backend
from auth.database import User
from auth.manager import get_user_manager
from basket import basket_json, set_basket_json, del_basket_json
from tree_list import set_tree_list
router = APIRouter()
fastapi_users = FastAPIUsers[User, int](
    get_user_manager,
    [auth_backend],
)


current_user = fastapi_users.current_user()
@router.get("/user_my")
async def read_me(user: User = Depends(current_user)):
    user_data = {
        "email": user.email,
        "phone": user.phone,
        "id": user.id
    }

    return user_data

@router.get("/del_basket")
def del_basket(user: User = Depends(current_user)):
    basket_new = []
    with open(f"Basket/{user.email}.json", "w", encoding="utf-8") as file:
        json.dump(basket_new, file)
    return []
@router.get("/get_basket")
def get_basket(user: User = Depends(current_user)):
    return basket_json(user.email)
@router.get("/del_basket/{key}")
def del_basket_key(key: str, user: User = Depends(current_user)):

    basket = basket_json(user.email)
    del_basket_json(basket, user.email, key)

@router.get("/set_basket/{key}")
def set_basket(key: str, user: User = Depends(current_user)):

    basket = basket_json(user.email)
    set_basket_json(basket, user.email, key)
@router.get("/Name_without_use/{key}")
def get_detal(key: str):
    with open('Output.json', encoding='utf-8') as f:
        file_content = f.read()
        templates = json.loads(file_content)
    for detal in templates:
        if detal["ID"] == key:
            return detal
    return []
@router.get("/brands")
def get_brands():

    with open('Output.json', encoding='utf-8') as f:
        file_content = f.read()
        templates = json.loads(file_content)
        all_brends = [{

            "Марка": "",
            "Модель": []
        }]

    for brands in templates:

        all_model = []
        for model in all_brends:
            all_model.append(model["Марка"])
        if brands["Марка"] not in all_model:
            all_brends.append({

                "Марка": brands["Марка"],
                "Модель": []
            })

        for brend in all_brends:
            if brend["Марка"] == brands["Марка"] and brands["Модель"] not in brend["Модель"]:
                brend["Модель"].append(brands["Модель"])
    return all_brends
@router.get("/{brend}")
def get_brand(brend: str):
    brend = brend.strip().lower()
    print(brend)
    with open('Output.json', encoding='utf-8') as f:
        file_content = f.read()
        templates = json.loads(file_content)
        detail = []

        for brands in templates:

            if brands["Марка"].strip().lower() == brend or brend == 'all':

                detail.append(brands)

    return detail
@router.get("/added_value/{value}")
def get_value(value: float):
    value = float(value)

    templates = {
            'added_value':value,
        }

    with open('added_value.json', 'w', encoding='utf-8') as file:
            json.dump(templates, file, ensure_ascii=False, indent=4)

    return templates
@router.post("/set_json")
def set_js():
    set_new_json()
    return

@router.post("/tree_list")
def set_tree():
    with open('tree_list.json', 'r', encoding='utf-8') as file:
        file_content = file.read()
        tree_list = json.loads(file_content)
    return tree_list

=======

import pandas as pd
import json
from fastapi import APIRouter, Depends
from fastapi_users import FastAPIUsers
from set_json_data import  set_new_json
from auth.auth import auth_backend
from auth.database import User
from auth.manager import get_user_manager
from basket import basket_json, set_basket_json, del_basket_json
from tree_list import set_tree_list
router = APIRouter()
fastapi_users = FastAPIUsers[User, int](
    get_user_manager,
    [auth_backend],
)


current_user = fastapi_users.current_user()
@router.get("/user_my")
async def read_me(user: User = Depends(current_user)):
    user_data = {
        "email": user.email,
        "phone": user.phone,
        "id": user.id
    }

    return user_data

@router.get("/del_basket")
def del_basket(user: User = Depends(current_user)):
    basket_new = []
    with open(f"Basket/{user.email}.json", "w", encoding="utf-8") as file:
        json.dump(basket_new, file)
    return []
@router.get("/get_basket")
def get_basket(user: User = Depends(current_user)):
    return basket_json(user.email)
@router.get("/del_basket/{key}")
def del_basket_key(key: str, user: User = Depends(current_user)):

    basket = basket_json(user.email)
    del_basket_json(basket, user.email, key)

@router.get("/set_basket/{key}")
def set_basket(key: str, user: User = Depends(current_user)):

    basket = basket_json(user.email)
    set_basket_json(basket, user.email, key)
@router.get("/Name_without_use/{key}")
def get_detal(key: str):
    with open('Output.json', encoding='utf-8') as f:
        file_content = f.read()
        templates = json.loads(file_content)
    for detal in templates:
        if detal["ID"] == key:
            return detal
    return []
@router.get("/brands")
def get_brands():

    with open('Output.json', encoding='utf-8') as f:
        file_content = f.read()
        templates = json.loads(file_content)
        all_brends = [{

            "Марка": "",
            "Модель": []
        }]

    for brands in templates:

        all_model = []
        for model in all_brends:
            all_model.append(model["Марка"])
        if brands["Марка"] not in all_model:
            all_brends.append({

                "Марка": brands["Марка"],
                "Модель": []
            })

        for brend in all_brends:
            if brend["Марка"] == brands["Марка"] and brands["Модель"] not in brend["Модель"]:
                brend["Модель"].append(brands["Модель"])
    return all_brends
@router.get("/{brend}")
def get_brand(brend: str):
    brend = brend.strip().lower()
    print(brend)
    with open('Output.json', encoding='utf-8') as f:
        file_content = f.read()
        templates = json.loads(file_content)
        detail = []

        for brands in templates:

            if brands["Марка"].strip().lower() == brend or brend == 'all':

                detail.append(brands)

    return detail
@router.get("/added_value/{value}")
def get_value(value: float):
    value = float(value)

    templates = {
            'added_value':value,
        }

    with open('added_value.json', 'w', encoding='utf-8') as file:
            json.dump(templates, file, ensure_ascii=False, indent=4)

    return templates
@router.post("/set_json")
def set_js():
    set_new_json()
    return

@router.post("/tree_list")
def set_tree():
    return set_tree_list()

>>>>>>> 14abc5db38fd21a7699e42b63b810b5b865115ab
