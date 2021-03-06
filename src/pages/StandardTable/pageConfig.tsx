import type { ColumnProps } from 'antd/lib/table';
import type { RenderFormItemProps } from '@/core/common/renderFormItem';

const formItemProps = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};

export interface PageConfigProps<T> {
  name: string;
  path: string;
  tableColumns?: ColumnProps<T>[];
  searchForms?: RenderFormItemProps[];
  detailFormItems?: RenderFormItemProps[];
}

function pageConfig<T>(): PageConfigProps<T> {
  return {
    name: '标准表格',
    path: 'standardtable',
    tableColumns: [
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '性别',
        dataIndex: 'sex',
      },
      {
        title: '性别1',
        dataIndex: 'sex1',
      },
    ],
    searchForms: [
      {
        widget: 'AInput',
        name: 'name',
        label: '姓名',
        formItemProps,
        widgetProps: {},
      },
    ],
    detailFormItems: [
      {
        widget: 'AInput',
        name: 'id',
        initialValue: -1,
        colSpan: 0,
      },
      {
        widget: 'AInput',
        name: 'name',
        label: '姓名',
        required: true,
        colSpan: 24,
        formItemProps,
      },
      {
        widget: 'AInput',
        name: 'name1',
        label: '姓名1',
        required: true,
        colSpan: 24,
        formItemProps,
      },
      {
        widget: 'ASelect',
        name: 'sex',
        label: '性别',
        required: true,
        selectOptions: [
          {
            key: '男',
            value: '男',
          },
          {
            key: '女',
            value: '女',
          },
        ],
        colSpan: 24,
        formItemProps,
      },

      {
        widget: 'AInputTextArea',
        name: 'remark',
        label: '备注',
        required: false,
        colSpan: 24,
        formItemProps,
        widgetProps: {
          autoSize: { minRows: 5, maxRows: 10 },
        },
      },
    ],
  };
}

export default pageConfig;
