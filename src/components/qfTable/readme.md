# 视图层

```
<QfTable
    :data="tableData.list"
    :columns="columns"
>
</QfTable>

```

# 逻辑层

```
<script setup lang="ts">
const tableData = reactive({
	list: [
        {id:1, a:2, b:3, c:4},
        {id:1, a:2, b:3, c:4},
        {id:1, a:2, b:3, c:4},
        {id:1, a:2, b:3, c:4},
    ],
	total: 10
})

const columns: Table.Columns[]  = [
    { title: "列标题", prop: "列填充字段", align: 'center', fixed:'right', tooltip: true },
    { title: "列标题", prop: "列填充字段" },
    { title: "列标题", prop: "列填充字段" },
    {
        title: "列标题",
        prop: "列填充字段",
        type: "switch",
        payload: {
            open:1,
            openText:'已禁用',
            close:0,
            closeText:'未禁用',
            change: row=>console.log(row)
        }
    },
    {
        title: "列标题",
        prop: "列填充字段",
        width: 300,
        fixed: 'right',
        type: "operations",
        payload: [
            {
                icon: "图标",
                content: "修改用户",
                type: "primary",
                click: (row) => console.log("修改", row),
            },
                {
                icon: "图标",
                content: "分配角色",
                type: "success",
                click: (row) => console.log("分配角色", row),
            },
            {
                content: "删除",
                type: "danger",
                click: (row) => console.log("删除", row),
            },
        ]
    }
]
</script>

```
