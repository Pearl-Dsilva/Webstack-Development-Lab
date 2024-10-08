# import xmlschema
# xml_file = "file.xml"
# xsd_file = "file.xsd"

# validator = xmlschema.XMLSchema(xsd_file)
# if validator.is_valid(xml_file):
#     print("XML file is valid against the XSD schema.")
# else:
#     print("XML file is not valid against the XSD schema.")
#     print(validator.validate(xml_file))

from xsd_validator import XsdValidator

validator = XsdValidator('file.xsd')
validator.assert_valid('file.xml')