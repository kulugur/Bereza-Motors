<<<<<<< HEAD
import pandas as pd
import json
data_json = []
def set_new_json():
    with open('added_value.json', 'r', encoding='utf-8') as add:
        added_value = add.read()
        value = json.loads(added_value)['added_value']


    with open('sample_export.csv', 'r', encoding='utf-8') as csvfile:
        data = pd.read_csv(csvfile, delimiter=';', skiprows=0, encoding='utf-8', low_memory=False)
        output = r'Output.json'
        json_data = data.to_json(path_or_buf='Output.json', orient='records', force_ascii=False)
        print(json_data)

    with open('Output.json', 'r', encoding='utf-8') as file:
        file_content = file.read()
        templates = json.loads(file_content)
        for i in templates:
            i['Цена'] = i['Цена'] + (i['Цена'] * value / 100)
            i['Фотография'] = i['Фотография'].split(',')
            if i["Примечание"]:
                i["Примечание"] = i["Примечание"].replace('\\n', '')

    with open('Output.json', 'w', encoding='utf-8') as file:
        json.dump(templates, file, ensure_ascii=False, indent=4)
    return 'ok'
=======
import pandas as pd
import json
data_json = []
def set_new_json():
    with open('added_value.json', 'r', encoding='utf-8') as add:
        added_value = add.read()
        value = json.loads(added_value)['added_value']


    with open('sample_export.csv', 'r', encoding='utf-8') as csvfile:
        data = pd.read_csv(csvfile, delimiter=';', skiprows=0, encoding='utf-8', low_memory=False)
        output = r'Output.json'
        json_data = data.to_json(path_or_buf='Output.json', orient='records', force_ascii=False)
        print(json_data)

    with open('Output.json', 'r', encoding='utf-8') as file:
        file_content = file.read()
        templates = json.loads(file_content)
        for i in templates:
            i['Цена'] = i['Цена'] + (i['Цена'] * value / 100)
            i['Фотография'] = i['Фотография'].split(',')
            if i["Примечание"]:
                i["Примечание"] = i["Примечание"].replace('\\n', '')

    with open('Output.json', 'w', encoding='utf-8') as file:
        json.dump(templates, file, ensure_ascii=False, indent=4)
    return 'ok'
>>>>>>> 14abc5db38fd21a7699e42b63b810b5b865115ab
