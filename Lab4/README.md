# WSD_Lab_Exercise_4
XML, XSD, DTD and Python validator codes.
# .....................................................................................................
You are tasked with designing the structure of an XML document to represent product information for an e-commerce company similar to Amazon. The company sells a wide range of products, and you need to define elements with specific restrictions and value ranges. The product information should include the product name, price, available quantity, and category. Each product should have a unique ID as well. Categories can include 'Electronics', 'Clothing', and 'Books'. The price of a product should be between $5 and $500, and the available quantity should be between 1 and 1000. Create an XSD schema, a DTD, and a sample XML instance based on these requirements  and validate it


Help Code
For mentioning th price range :

<xs:element name="price" type="priceType"/>

<xs:simpleType name="priceType">
    <xs:restriction base="xs:decimal">
      <xs:minInclusive value="5"/>
      <xs:maxInclusive value="500"/>
    </xs:restriction>
  </xs:simpleType>


For mentioning category

<xs:element name="category" type="categoryType"/>

<xs:simpleType name="categoryType">
    <xs:restriction base="xs:string">
      <xs:enumeration value="Electronics"/>
      <xs:enumeration value="Clothing"/>
      <xs:enumeration value="Books"/>
    </xs:restriction>
  </xs:simpleType>
