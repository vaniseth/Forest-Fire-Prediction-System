import logging

logging.basicConfig(
    level=logging.DEBUG,
    filename="./Log File.log",
    format="%(asctime)s %(levelname)s %(module)s => %(message)s ",
    datefmt="%d-%m-%Y %H:%M:%S",
)
log = logging.getLogger()
log.setLevel(logging.DEBUG)