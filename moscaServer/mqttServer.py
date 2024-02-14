import paho.mqtt.publish as publish
import json

# Configuración del broker MQTT
broker_host = "broker.hivemq.com"
broker_port = 1883
topic = "ah/"


data = {
    "mensaje": "Hola, MQTT desde Python!",
    "otro_dato": 42,
    "booleano": True
}

# Convertir datos a JSON
message_json = json.dumps(data)

# Publicar el mensaje JSON
publish.single(topic, message_json, hostname=broker_host, port=broker_port)

print(f"Mensaje JSON publicado en el tema '{topic}': {message_json}")
