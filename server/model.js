const mongoose = require('mongoose');
//链接mongoose
const DB_URL = 'mongodb://127.0.0.1:27017/study';
mongoose.connect(DB_URL, {useNewUrlParser: true});

const models = {
    user: {
        'user': {'type': String, 'require': true},
        'pwd': {'type': String, 'require': true},
        'type': {'type': String, 'require': true},
        //头像
        'avatar': {'type': String},
        //简介
        'desc': {'type': String},
        //职位
        'title': {'type': String},
        //如果是boss 还有两个字段 company,money
        'company': {'type': String},
        'money': {'type': String}
    }
};

for (let m in models) {
    mongoose.model(m, new mongoose.Schema(models[m]))
}

module.export = {
    getModel: function (name) {
        return mongoose.model(name)
    }
};