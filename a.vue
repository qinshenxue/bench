<template>
    <div>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="app_name" label="名称">
            </el-table-column>
            <el-table-column prop="app_type" label="类型">
            </el-table-column>

            <el-table-column show-overflow-tooltip prop="template" label="类型" width="100">
            </el-table-column>

            <el-table-column show-overflow-tooltip prop="script" label="类型" width="100">
            </el-table-column>

            <el-table-column show-overflow-tooltip prop="style" label="类型" width="100">
            </el-table-column>
            <el-table-column label="操作">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                tableData: []
            }
        },

        created: function () {
            fetch('/app/list', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json()).then(res => {
                this.tableData = res.data
            })
        }

    }
</script>

<style>
</style>

