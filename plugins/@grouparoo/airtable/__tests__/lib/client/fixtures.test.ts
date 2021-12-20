export const tableResponse = {
  tables: [
    {
      id: 'tbltp8DGLhqbUmjK1',
      name: 'Apartments',
      primaryFieldId: 'fld1VnoyuotSTyxW1',
      fields: [
        {
          id: 'fld1VnoyuotSTyxW1',
          name: 'Name',
          type: 'singleLineText',
        },
        {
          id: 'fldoaIqdn5szURHpw',
          name: 'Pictures',
          type: 'multipleAttachment',
        },
        {
          id: 'fldumZe00w09RYTW6',
          name: 'District',
          type: 'multipleRecordLinks',
          options: {
            isReversed: false,
            inverseLinkFieldId: 'fldWnCJlo2z6ttT8Y',
            linkedTableId: 'tblK6MZHez0ZvBChZ',
            prefersSingleRecordLink: true,
          },
        },
      ],
      views: [
        {
          id: 'viwQpsuEDqHFqegkp',
          name: 'Grid view',
          type: 'grid',
        },
      ],
    },
  ],
};

export const unauthorizedResponse = {
  error: {
    type: 'AUTHENTICATION_REQUIRED',
    message: 'Authentication required',
  },
};

export const deleteRecordResponse = {
  id: 'reczFTXqfjIBkAqfv',
  deleted: true,
};

export const deleteRecordsResponse = {
  records: [
    {
      id: 'reczFTXqfjIBkAqfv',
      deleted: true,
    },
    {
      id: 'recDliLo3Z5IwX7f4',
      deleted: true,
    },
  ],
};
export const upsertRecordResponse = {
  id: 'reczFTXqfjIBkAqfv',
  fields: {
    foo: 'fee',
    bar: 'fi',
  },
  createdTime: '2021-11-11T20:53:23.000Z',
};

export const upsertRecordsResponse = {
  records: [
    {
      id: 'reczFTXqfjIBkAqfv',
      fields: {
        foo: 'Fi',
        bar: 'Fee',
      },
      createdTime: '2021-11-11T20:53:23.000Z',
    },
    {
      id: 'recDliLo3Z5IwX7f4',
      fields: {
        foo: 'Foe',
        bar: 'Fum',
      },
      createdTime: '2021-11-11T21:00:31.000Z',
    },
  ],
};
export const successfulListRecordsResponse = {
  records: [
    {
      id: 'recCnQsuQZ10WxoBK',
      fields: {
        Name: 'Name 1',
      },
      createdTime: '2021-12-07T03:56:54.000Z',
    },
    {
      id: 'recCnQsuQZ10Wxo31',
      fields: {
        Name: 'Name 2',
      },
      createdTime: '2021-12-07T03:56:54.000Z',
    },
    {
      id: 'recCnQsuQZ10Wxo42',
      fields: {
        Name: 'Name 3',
      },
      createdTime: '2021-12-07T03:56:54.000Z',
    },
  ]
};
export const foreignKeys = ['Name 1', 'Name 2', 'Name 3'];
export const primaryKey = 'Name';
test.todo("fixture data shouldn't be tested");
