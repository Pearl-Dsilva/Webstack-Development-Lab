# WSD_Lab_Exercise_5

Case Study: Transforming XML Data with XSL and Validating with XSD <br />
Scenario:
You are working for a fictional e-commerce company called "ShopSmart," and they have recently revamped their product catalog. The product data is stored in XML format and needs to be transformed into a more user-friendly HTML format for display on their website. Additionally, they want to ensure that the transformed data adheres to a predefined XML schema for validation purposes.
Your task is to create an XSL stylesheet to transform the product data from the XML format into HTML and validate it against a corresponding XSD schema.<br />
Instructions: <br />
You will be provided with a sample XML product catalog file (products.xml) containing product information. Here's a simplified snippet:
```
xmlCopy code
<products>
<product>
<id>1</id>
<name>Laptop</name>
<price>999.99</price>
<description>Powerful laptop with great features.</description>
</product>
<!-- More product entries -->
</products>
```
Create an XSL stylesheet (transform.xsl) that transforms the XML product data into HTML. Your HTML output should display each product's name, price, and description in a user-friendly format.<br />
Create an XML Schema Definition (product_schema.xsd) for the product data. Define rules and constraints for the product elements, such as making sure that the price element contains valid numeric values.<br />
Write a script or program in a language of your choice (e.g., Python, Java, or XSLT processor) that performs the following tasks:<br />
Applies your XSL stylesheet to the products.xml data to generate an HTML file.
Validates the transformed HTML data against the product_schema.xsd to ensure it adheres to the defined structure and rules.<br />

Provide a summary report of the transformation and validation process. Include any errors or issues encountered during validation.<br />
Test your solution with various scenarios, including cases where data in products.xml violates the schema rules.<br />
Document your solution, including the purpose of the XSL stylesheet, XSD schema, and the script or program you used for transformation and validation.<br />
Implement error handling to capture and report any validation errors and provide suggestions for correcting them. <br />
This case study will not only demonstrate your ability to work with XSL and XSD but also showcase your skills in data transformation, validation, and documentation.<br />
