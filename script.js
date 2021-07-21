// variabel untuk element HTML
const hideShowEl = document.querySelectorAll('.hideShow');
const fusePetEl = document.querySelector('#fusePet');
const maxLvlEl = document.querySelector('#maxLvl');
const weaponPetEl = document.querySelector('#weaponPet');
const typePetEl = document.querySelector('#typePet');
const naturePetEl = document.querySelector('#naturePet');

const strPotEl = document.querySelector('#strPot');
const intPotEl = document.querySelector('#intPot');
const vitPotEl = document.querySelector('#vitPot');
const agiPotEl = document.querySelector('#agiPot');
const dexPotEl = document.querySelector('#dexPot');

const bonusStatEl = document.querySelector('#bonusStat');
const powerPetEl = document.querySelector('#powerPet');

const maxhpEl = document.querySelector('#maxhp');
const atkEl = document.querySelector('#atk');
const matkEl = document.querySelector('#matk');
const defEl = document.querySelector('#def');
const mdefEl = document.querySelector('#mdef');
const hitEl = document.querySelector('#hit');
const aspdEl = document.querySelector('#aspd');
const cspdEl = document.querySelector('#cspd');
const fleeEl = document.querySelector('#flee');

const calculate = document.getElementById('calculate');
const reload = document.getElementById('reload');

// custom progressbar
// variables for buttons in page
const minButton = document.querySelectorAll('.minus-btn');
const plusButton = document.querySelectorAll('.plus-btn');

// variables for progress bar
const progressBar = document.querySelectorAll('.progress');
const fill = document.querySelectorAll('.progress__fill');
const txt = document.querySelectorAll('.progress__text');

// variables for stat point
const freePoint = document.querySelector("#free-point");
let fpVal;

// Functions Expression dalam const
// menghitung level mulai isi stat utama
const primaryStat = function decidePetPrimaryStatLvl(param) {
    // argumen 1 untuk isi stat utama di lvl tertentu
    // argumen 2 untuk nama stat utama
    if (param === 1) {
        return Math.floor((255 - bonusStat) / ((decidePetPrimaryStat() / 100) + 1));
    } else if (param === 2) {
        switch (decidePetPrimaryStat()) {
            case undefined:
                break;
            case potential[0]:
                return 'STR';
            case potential[1]:
                return 'INT';
            case potential[2]:
                return 'VIT';
            case potential[3]:
                return 'AGI';
            case potential[4]:
                return 'DEX';
        }
    } else {
        return decidePetPrimaryStat();
    }

    function decidePetPrimaryStat() {
        return Math.max.apply(Math, potential);
    }
};

// menghitung maxhp pet
const calcMaxhp = function calculatePetMaxhp() {
    return Math.floor(93 + (stats[2] + 22.4) * maxLvl / 3);
};

// menghitung cspd pet
const calcCspd = function calculatePetCspd() {
    return Math.floor(maxLvl + (1.16 * stats[3] + 2.94 * stats[4]))
};

// menghitung hit pet
const calcHit = function calculatePetHit() {
    return maxLvl + stats[4];
};

// menghitung def pet
const calcDef = function calculatePetDef() {
    return Math.floor(0.4 * maxLvl + 0.1 * stats[2]);
};

// menghitung mdef pet
const calcMdef = function calculatePetMdef() {
    return Math.floor(0.4 * maxLvl + 0.1 * stats[1]);
};

// menghitung flee pet
const calcFlee = function calculatePetFlee() {
    return Math.floor(75 + (1.5 * maxLvl + 2 * stats[3]));
};

// menghitung aspd pet
const calcAspd = function calculatePetAspd() {
    switch (weaponPet) {
        case 'ohs':
            return Math.floor(100 + maxLvl + 4 * stats[3] + (stats[3] + stats[0] - 1) / 5);
        case 'ths':
            return Math.floor(50 + maxLvl + 2 * stats[3] + (stats[3] + stats[0] - 1) / 5);
        case 'bow':
            return Math.floor(75 + maxLvl + 3 * stats[3] + (stats[3] + 2 * stats[4] - 1) / 10);
        case 'bwg':
            return Math.floor(100 + maxLvl + 2.2 * stats[3] + 0.2 * stats[4]);
        case 'stf':
            return Math.floor(60 + maxLvl + stats[3] + (4 * stats[3] + stats[1] - 1) / 5);
        case 'md':
            return Math.floor(90 + maxLvl + 4 * stats[3] + (stats[1] - 1) / 5);
        case 'knk':
            return Math.floor(120 + maxLvl + 4.6 * stats[3] + stats[0] / 10);
    }
};

// menghitung atk pet
const calcAtk = function calculatePetAtk() {
    switch (weaponPet) {
        case 'ohs':
            return Math.floor(maxLvl + 2 * stats[0] + 2 * stats[4] + powerPet);
        case 'ths':
            return Math.floor(maxLvl + 3 * stats[0] + stats[4] + powerPet);
        case 'bow':
            return Math.floor(maxLvl + 3 * stats[4] + stats[0] + powerPet);
        case 'bwg':
            return Math.floor(maxLvl + 4 * stats[4] + powerPet);
        case 'stf':
            return Math.floor(maxLvl + 3 * stats[0] + stats[1] + powerPet);
        case 'md':
            return Math.floor(maxLvl + 2 * stats[1] + 2 * stats[3] + powerPet);
        case 'knk':
            return Math.floor(maxLvl + 2 * stats[3] + 0.5 * stats[4] + powerPet);
    }
};

// menghitung matk pet
const calcMatk = function calculatePetMatk() {
    switch (weaponPet) {
        case 'ohs':
            return Math.floor(maxLvl + 3 * stats[1] + stats[4] + 1);
        case 'ths':
            return Math.floor(maxLvl + 3 * stats[1] + stats[4] + 1);
        case 'bow':
            return Math.floor(maxLvl + 3 * stats[1] + stats[4]);
        case 'bwg':
            return Math.floor(maxLvl + 3 * stats[1] + stats[4]);
        case 'stf':
            return Math.floor(maxLvl + 4 * stats[1] + stats[4] + powerPet);
        case 'md':
            return Math.floor(maxLvl + 4 * stats[1] + stats[4] + powerPet);
        case 'knk':
            return Math.floor(maxLvl + 4 * stats[1] + stats[4] + 0.5 * powerPet);
    }
};

// membuat fungsi untuk memeriksa padu pet
const isFused = function checkIfFused() {
    return ((
        fusePetEl.value === 'y'
    ) ? true : false);
};
// menyembunikan dan menampilkan element yang terkait padu pet
const hideShow = function toHideShowFuseRelatedSection() {
    window.onload = function hideElementWhenPageLoad() {
        hideShowEl.forEach(e => {
            e.readOnly = true;
        });
    }

    fusePetEl.onchange = function showHideElementWhenValueChanged() {
        hideShowEl.forEach(e => {
            e.readOnly = (isFused()) ? false : true;
            e.value = (isFused()) ? e.value : '';
        })
    }
};

// membuat validasi untuk memeriksa nilai dari element input
const isAllFilled = function checkIfInputElementsFilled() {
    return ((
        checkPotentialInput() && checkFuseInput() && checkSpecInput()
    ) ? true : false);

    function checkSpecInput() {
        return ((
            maxLvlEl.value === '' ||
            weaponPetEl.value === '' ||
            typePetEl.value === '' ||
            naturePetEl.value === ''
        )) ? false : true;
    }

    function checkPotentialInput() {
        return ((
            strPotEl.value === '' ||
            intPotEl.value === '' ||
            vitPotEl.value === '' ||
            agiPotEl.value === '' ||
            dexPotEl.value === ''
        ) ? false : true);
    }

    function checkFuseInput() {
        if (!isFused()) {
            return true;
        } else if (isFused()) {
            return ((
                bonusStatEl.value === '' ||
                powerPetEl.value === ''
            ) ? false : true);
        }
    }
};

// memasukan nilai dari form
const input = function inputPetPorpertiesFromPage() {
    maxLvl = parseInt(maxLvlEl.value);
    weaponPet = weaponPetEl.value;
    typePet = typePetEl.value;
    naturePet = naturePetEl.value;
    potential.push(parseInt(strPotEl.value), parseInt(intPotEl.value), parseInt(vitPotEl.value), parseInt(agiPotEl.value), parseInt(dexPotEl.value));

    calcBonusStat();
    calcPowerPet();
};

// menghitung bonus stat poin hasil padu
const calcBonusStat = function calculateBonusStatPet() {
    if (isFused()) {
        bonusStat = parseInt(bonusStatEl.value);
    } else {
        bonusStat = 0;
    }
};

// menginput power pet
const calcPowerPet = function calculatePowerPet() {
    if (isFused()) {
        powerPet = parseInt(powerPetEl.value);
    } else {
        powerPet = 1;
    }
};

// menghitung potential untuk stat
const calcStats = function calculateStatsAndPushToArray() {
    // array sementara
    let tmpStat = [];
    potential.forEach((e, i) => {
        tmpStat.push(calculateBasePetStat(e));
        if (e === primaryStat()) {
            tmpStat[i] += primaryStat(1) + bonusStat - 1;
        }
    })
    // masukan nilai akhir dari array sementara
    stats.push(...tmpStat);
    statsDefault.push(...tmpStat);
    // tentukan sisa poin status
    calculateFreeStatPoint();

    function calculateBasePetStat(x) {
        // x sebagai potensial stat
        return Math.floor(1 + (x / 100) * maxLvl);
    }

    function calculateFreeStatPoint() {
        freePoint.value = maxLvl - primaryStat(1);
        fpVal = parseInt(freePoint.value);
    }
};

// menghitung stat turunan
const calcDerived = function calculateDerivedStats() {
    maxhpEl.innerHTML = calcMaxhp();
    atkEl.innerHTML = calcAtk();
    matkEl.innerHTML = calcMatk();
    defEl.innerHTML = calcDef();
    mdefEl.innerHTML = calcMdef();
    hitEl.innerHTML = calcHit();
    aspdEl.innerHTML = calcAspd();
    cspdEl.innerHTML = calcCspd();
    fleeEl.innerHTML = calcFlee();
};

// membuat tombol utama untuk menghitung semua nilai input
const calcButton = function calculateAllInputFromPage() {
    if (isAllFilled()) {
        input();
        calcStats();
        progress();
        calcDerived();
        stats.forEach((e, i) => {
            plusMinRegulation(i);
        })
        calculate.disabled = true;
        window.scrollTo(0, 0);
        // window.animate({scrollTo: (0, 0)},'fast');
    } else {
        alert('Pastikan semua Form Pet Properti terisi!');
    }
};

// ==============================================
// ==============untuk progressbar===============
// ==============================================
// define the stat
const stat = function decideStatByArrayIndex(index) {
    switch (index) {
        case 0:
            return 'STR';
        case 1:
            return 'INT';
        case 2:
            return 'VIT';
        case 3:
            return 'AGI';
        case 4:
            return 'DEX';
    }
};

// // progress bar update function
const progress = function updateProgressBar() {
    progressBar.forEach((e, i) => {

        if (stats[i] === undefined || stats[i] === NaN) {
            fill[i].style.width = '1%';
            txt[i].textContent = `${stat(i)} 1`;
        } else if (stats[i] > 255) {
            fill[i].style.width = '100%';
            txt[i].textContent = `${stat(i)} ${stats[i]}`;
        } else {
            val = Math.round((stats[i] / 255) * 100)
            fill[i].style.width = `${val}%`;
            txt[i].textContent = `${stat(i)} ${stats[i]}`;
        }
    })
    if (fpVal < 0) {
        alert('ngisi properti pet-nya yang bener dong ah');
        window.location.reload();
    }
};

// plus button function
const plus = function plusButtonFunctionWhenClicked(i) {
    // set the regulation
    if (stats[i] < 255 && fpVal !== 0) {
        addValue(i);
    }

    // call function to update progress bar
    progress();
    // call function to update derived stat
    calcDerived();
    // stat value increment by 1 function
    function addValue(i) {
        stats[i]++;
        fpVal--;
        freePoint.value = fpVal;
    }
};

const minus = function minButtonFunctionWhenClicked(i) {
    // set the regulation
    if (stats[i] > statsDefault[i]) {
        subtractValue(i);
    }

    // call function to update progress bar
    progress();
    // call function to update derived stat
    calcDerived();
    // stat value decrement by 1
    function subtractValue(i) {
        stats[i]--;
        fpVal++;
        freePoint.value = fpVal;
    }
};


const plusMinRegulation = function plusAndMinButtonsSwitch(i) {
    if (fpVal !== 0) {
        plusButtonOnOff(1);
        individualButtonRegulation();
    } else if (fpVal === 0) {
        // 1 for on, 0 for off
        plusButtonOnOff(0);
        individualButtonRegulation();
    }

    function plusButtonOnOff(handle) {
        let bol = () => {
            if (handle == 1) {
                return false;
            } else if (handle == 0) {
                return true;
            } else {
                return true;
            }
        }
        plusButton.forEach((e, index) => {
            if (stats[index] < 255) {
                e.disabled = bol();
            } else if (stats[index] > 255) {
                plusButton[index].disabled = true;
            }
        })
    }

    function individualButtonRegulation() {
        if (stats[i] > statsDefault[i]) {
            minButton[i].disabled = false;
            if (stats[i] >= 255) {
                plusButton[i].disabled = true;
                if (stats[i] > 255) {
                    minButton[i].disabled = true;
                }
            } else if (stats[i] < 255 && fpVal !== 0) {
                plusButton[i].disabled = false;
            } else {
                minButton[i].disabled = false;
            }
        } else if (stats[i] === statsDefault[i]) {
            minButton[i].disabled = true;
            if (stats[i] < 255 && fpVal !== 0) {
                plusButton[i].disabled = false;
            }
        }
    }
};

const potential = [];
const stats = [];
const statsDefault = [];

let bonusStat;
let maxLvl;
let weaponPet;
let powerPet;
let typePet;
let naturePet;

// ================jalankan script================
// main function execute itself at first page load
(function main() {
    // load progressbar
    progress();
    // manage fuse related element
    hideShow();
    // disable all minbuttons and some plusbuttons
    minButton.forEach((e, i) => {
        e.disabled = true;
        if (stats[i] > 255) {
            plusButton[i].disabled = true;
        } else if (stats.length === 0) {
            plusButton[i].disabled = true;
        } else {
            plusButton[i].disabled = false;
        }
    });
}());

// when plus button clicked call plus function
plusButton.forEach((e, i) => {
    e.addEventListener('click', () => {
        plus(i);
        plusMinRegulation(i);
    })
});

// when min button clicked call minus function
minButton.forEach((e, i) => {
    e.addEventListener('click', () => {
        minus(i)
        plusMinRegulation(i);
    })
});

calculate.addEventListener('click', calcButton);
reload.addEventListener('click', () => {
    window.location.reload();
});