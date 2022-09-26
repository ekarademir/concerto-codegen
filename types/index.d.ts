export var CodeGen: {
    AbstractPlugin: typeof import("./lib/codegen/abstractplugin");
    GoLangVisitor: typeof import("./lib/codegen/fromcto/golang/golangvisitor");
    JSONSchemaVisitor: typeof import("./lib/codegen/fromcto/jsonschema/jsonschemavisitor");
    XmlSchemaVisitor: typeof import("./lib/codegen/fromcto/xmlschema/xmlschemavisitor");
    PlantUMLVisitor: typeof import("./lib/codegen/fromcto/plantuml/plantumlvisitor");
    TypescriptVisitor: typeof import("./lib/codegen/fromcto/typescript/typescriptvisitor");
    JavaVisitor: typeof import("./lib/codegen/fromcto/java/javavisitor");
    GraphQLVisitor: typeof import("./lib/codegen/fromcto/graphql/graphqlvisitor");
    CSharpVisitor: typeof import("./lib/codegen/fromcto/csharp/csharpvisitor");
    ODataVisitor: typeof import("./lib/codegen/fromcto/odata/odatavisitor");
    formats: {
        golang: typeof import("./lib/codegen/fromcto/golang/golangvisitor");
        jsonschema: typeof import("./lib/codegen/fromcto/jsonschema/jsonschemavisitor");
        xmlschema: typeof import("./lib/codegen/fromcto/xmlschema/xmlschemavisitor");
        plantuml: typeof import("./lib/codegen/fromcto/plantuml/plantumlvisitor");
        typescript: typeof import("./lib/codegen/fromcto/typescript/typescriptvisitor");
        java: typeof import("./lib/codegen/fromcto/java/javavisitor");
        graphql: typeof import("./lib/codegen/fromcto/graphql/graphqlvisitor");
        csharp: typeof import("./lib/codegen/fromcto/csharp/csharpvisitor");
        odata: typeof import("./lib/codegen/fromcto/odata/odatavisitor");
    };
};
export var version: any;
