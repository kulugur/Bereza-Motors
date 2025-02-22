<<<<<<< HEAD
import json
def set_tree_list():
    with open('Output.json', 'r', encoding='utf-8') as file:
        file_content = file.read()
        templates = json.loads(file_content)
        tree = [
             #{
        #     'title': 'Ford',
        #     'key': '0-0',
        #     'children': [
        #         {
        #       'title': 'Focus',
        #       'key': '0-0-0',
        #       'children': [
        #           {
        #         'title': 'mondeu',
        #         'key': '0-0-6',
        #
        #         },
        #       ]
        #         },
         #   ]



        #}
        ]
        title = []
        for brand in templates:

                if brand['Марка'] in title:
                    model = brand['Марка']
                    for i in tree:
                        if i['title'] == model:

                            if brand['Модель'] == None:
                                    brand['Модель'] = brand['Марка']
                            children = []
                            for tit in i['children']:
                                children.append(tit['title'])
                            if brand['Модель'] in children:
                                for s in i['children']:
                                    if s['title'] == brand['Модель']:
                                        s['children'].append( {
                                        'title': brand['Наименование'],
                                        'key': brand['ID'],
                                        'isLeaf': True,

                                        })
                                        break

                                else:
                                        s['children'].append({
                                    'title': brand['Модель'],
                                    'key': brand['ID']+"Модель",
                                    'children': [
                                        {
                                        'title': brand['Наименование'],
                                        'key': brand['ID'],
                                           'isLeaf': True,

                                        }]
                                        })
                                        break
                            else:
                                i['children'].append({
                                    'title': brand['Модель'],
                                    'key': brand['ID'] + "Модель",
                                    'children': [
                                        {
                                            'title': brand['Наименование'],
                                            'key': brand['ID'],
                                            'isLeaf': True,

                                        }]
                                })
                                break



                else:

                    title.append(brand['Марка'])
                    if brand['Модель'] == None:
                        brand['Модель'] = brand['Марка']
                    tree.append(
                        {
                    'title': brand['Марка'],
                    'key':brand['ID']+"brend",
                    'children': [
                        {
                        'title': brand['Модель'],
                        'key': brand['ID']+"Модель",
                        'children': [
                            {
                            'title': brand['Наименование'],
                            'key': brand['ID'],
                            'isLeaf': True,

                            }]
                            },
                            ]
                    }
                    )
    with open('tree_list.json', 'w', encoding='utf-8') as file:
        json.dump(tree, file, ensure_ascii=False, indent=4)
    return tree

set_tree_list()
=======
import json
def set_tree_list():
    with open('Output.json', 'r', encoding='utf-8') as file:
        file_content = file.read()
        templates = json.loads(file_content)
        tree = [
             #{
        #     'title': 'Ford',
        #     'key': '0-0',
        #     'children': [
        #         {
        #       'title': 'Focus',
        #       'key': '0-0-0',
        #       'children': [
        #           {
        #         'title': 'mondeu',
        #         'key': '0-0-6',
        #
        #         },
        #       ]
        #         },
         #   ]



        #}
        ]
        title = []
        for brand in templates:

                if brand['Марка'] in title:
                    model = brand['Марка']
                    for i in tree:
                        if i['title'] == model:

                            if brand['Модель'] == None:
                                    brand['Модель'] = brand['Марка']
                            children = []
                            for tit in i['children']:
                                children.append(tit['title'])
                            if brand['Модель'] in children:
                                for s in i['children']:
                                    if s['title'] == brand['Модель']:
                                        s['children'].append( {
                                        'title': brand['Наименование'],
                                        'key': brand['ID'],
                                        'isLeaf': True,

                                        })
                                        break

                                else:
                                        s['children'].append({
                                    'title': brand['Модель'],
                                    'key': brand['ID']+"Модель",
                                    'children': [
                                        {
                                        'title': brand['Наименование'],
                                        'key': brand['ID'],
                                           'isLeaf': True,

                                        }]
                                        })
                                        break
                            else:
                                i['children'].append({
                                    'title': brand['Модель'],
                                    'key': brand['ID'] + "Модель",
                                    'children': [
                                        {
                                            'title': brand['Наименование'],
                                            'key': brand['ID'],
                                            'isLeaf': True,

                                        }]
                                })
                                break



                else:

                    title.append(brand['Марка'])
                    if brand['Модель'] == None:
                        brand['Модель'] = brand['Марка']
                    tree.append(
                        {
                    'title': brand['Марка'],
                    'key':brand['ID']+"brend",
                    'children': [
                        {
                        'title': brand['Модель'],
                        'key': brand['ID']+"Модель",
                        'children': [
                            {
                            'title': brand['Наименование'],
                            'key': brand['ID'],
                            'isLeaf': True,

                            }]
                            },
                            ]
                    }
                    )
    with open('tree_list.json', 'w', encoding='utf-8') as file:
        json.dump(tree, file, ensure_ascii=False, indent=4)
    return tree

set_tree_list()
>>>>>>> 14abc5db38fd21a7699e42b63b810b5b865115ab
