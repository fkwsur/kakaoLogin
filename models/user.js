module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'User',
		{
			idx: {
				type: DataTypes.INTEGER, //int
				primaryKey: true, //PRIMARY KEY
				autoIncrement: true, //auto_increment
				allowNull: false // not null
			},
			id: {
				type: DataTypes.STRING, // varchar //기본적으로 varchar(255)로 선언됨
				unique: true, //중복될 수 없는 값
				allowNull: false
			}
		},
		{
			freezeTableName: true, //users  << 이걸 s안붙이게 하라는 뜻임
			timestamps: false, //true를 하면 createdAt, UpdatedAt 컬럼이 맘대로생김
			comment: '유저 테이블 '
		}
	);
	return User;
}