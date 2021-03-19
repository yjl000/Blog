
// 不同的类找不到可以继承的父类的时候，可以用接口定义公共方法
interface Radio {
    switchRadio(trigger: boolean): void;
}

interface Battery {
    checkBatteryStatus(): void;
}

// 接口继承
interface RadioWithBattery extends Radio {
    checkBatteryStatus(): void;

}


class Car implements Radio {
    switchRadio(trigger: boolean) {

    }
}

// class Cellphone implements Radio, Battery {
//     switchRadio(trigger: boolean) {

//     }

//     checkBatteryStatus() {

//     }
// }

// 使用接口继承
class Cellphone implements RadioWithBattery {
    switchRadio(trigger: boolean) {

    }

    checkBatteryStatus() {

    }
}