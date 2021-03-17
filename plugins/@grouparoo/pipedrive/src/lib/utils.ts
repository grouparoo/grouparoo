export async function findPersonId(
  client: any,
  email: string
): Promise<number | null> {
  if (!email) return null;

  const {
    data,
  } = await client.SearchResultsController.getPerformASearchUsingASpecificFieldValue(
    {
      term: email,
      itemType: "person",
      fieldType: "personField",
      exactMatch: true,
      fieldKey: "email",
      returnItemIds: true,
    }
  );

  if (data.length == 0) return null;
  return data[0].id;
}
