//add complexion, height,weight to allowedStoreCustomersFields and defaultStoreCustomersFields
export default async function () {
    const imports = (await import(
      "@medusajs/medusa/dist/api/routes/store/customers/index"
    )) as any
    imports.allowedStoreCustomersFields = [
      ...imports.allowedStoreCustomersFields, 
      "complexion","height","weight"    ]
    imports.defaultStoreCustomersFields = [
      ...imports.defaultStoreCustomersFields,
      "complexion","height","weight"    ]
  }