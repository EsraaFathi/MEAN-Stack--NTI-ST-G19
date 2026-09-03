show collections

db.createCollection('patiens')
db.createCollection('doctors')
db.createCollection('appointments')
//DATA MODELING=====
db.patients.insertMany([
{
    patientId:1,
    name:"Ahmed",
    age:25,
    gender:"Male",
    city:"Cairo"
},
{
    patientId:2,
    name:"Sara",
    age:30,
    gender:"Female",
    city:"Alexandria"
},
{
    patientId:3,
    name:"Omar",
    age:40,
    gender:"Male",
    city:"Cairo"
},
{
    patientId:4,
    name:"Mona",
    age:28,
    gender:"Female",
    city:"Giza"
}
])
db.patients.find()
db.doctors.insertMany([
{
    doctorId:101,
    name:"Dr. Ali",
    specialization:"Cardiology"
},
{
    doctorId:102,
    name:"Dr. Hassan",
    specialization:"Dermatology"
},
{
    doctorId:103,
    name:"Dr. Sara",
    specialization:"Orthopedics"
}
])
db.doctors.find()

//ref as new collection
db.appointments.insertMany([
{
    appointmentId:1,
    patientId:1,
    doctorId:101,
    fee:500,
    status:"Completed"
},
{
    appointmentId:2,
    patientId:2,
    doctorId:101,
    fee:600,
    status:"Completed"
},
{
    appointmentId:3,
    patientId:3,
    doctorId:102,
    fee:400,
    status:"Pending"
},
{
    appointmentId:4,
    patientId:1,
    doctorId:103,
    fee:700,
    status:"Completed"
},
{
    appointmentId:5,
    patientId:4,
    doctorId:103,
    fee:650,
    status:"Completed"
}
])
db.doctors.find()
db.patients.find()
db.appointments.find({})

///AGGREGATION
//$LOOKUP
db.appointments.aggregate([
{
    $lookup:{
        from:"patients",
        localField:"patientId",
        foreignField:"patientId",
        as:"patientDetials"
    }
},{
    $lookup:{
        from:"doctors",
        localField:"doctorId",
        foreignField:"doctorId",
        as:"doctorDetials"
    }
}
])

//$group

//اعرف كل دكتور عنده كام حجز//
db.appointments.aggregate([
{
    $group:{
        _id:"$doctorId",
        totalAppoin:{
            $sum:1
        }
        
    }
}
])
//
db.appointments.aggregate([
{
    $group:{
        _id:null,
        totalAppoin:{
            $sum:1
        }
        
    }
}
])
//
db.appointments.aggregate([
{
    $group:{
        _id:null,
        totalFees:{
            $sum:"$fee"
        }
        
    }
}
])
//
db.appointments.aggregate([
{
    $group:{
        _id:"$doctorId",
        totalAppoin:{
            $sum:"$fee"
        }
        
    }
}
])


db.appointments.aggregate([

{
    $group:{
        _id:"$doctorId",
        totalAppointments:{
            $sum:1
        }
    }
},

{
    $lookup:{
        from:"doctors",
        localField:"_id",
        foreignField:"doctorId",
        as:"doctor"
    }
}

])
