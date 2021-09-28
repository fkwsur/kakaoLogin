const express = require('express');
const app = express();
const cors = require('cors');
const compression = require('compression')
const db = require('./models');
const { User } = require('./models');

db.sequelize
    .authenticate()
    .then(async () => {
        console.log('db connect ok');
        await db.sequelize.sync({ force: false });
    })
    .catch(err => {
        console.log('db' + err);
    });


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());

app.post('/login', async (req, res) => {
    try {
        let { id } = req.body;
        console.log(id);
        const rows = await User.findOrCreate({
            where: { id: id },
            defaults: {
                id: id
            }

        });
        console.log(rows);
        console.log(rows[0].isNewRecord);
        if (!rows) throw { code: 1 }
        if (rows[0].isNewRecord) {
            return res.status(200).send('회원가입 성공')
        } else {
            return res.status(200).send('로그인 성공')
        }
    } catch (err) {
        console.log(err);
    }
});


app.listen(8081, () => {
    console.log('특훈 시작!')

});