import CardItem from "@/components/CardItem";
import cls from './PurchaseInfo.module.css'
import Button from "@/components/ui/Button";
import { ArrowIcon, ExcelIcon, PlusIcon, RemoveRowIcon } from "@/components/ui/icons";
import CardInputsItem from "@/components/CardInputsItem";
import Input from "@/components/ui/Input";

export default function PurchaseInfo(){
    return(
        <CardInputsItem >
            <div className={cls.purchaseTop}>
                <h4>Предмет закупки</h4>
                <div>
                    <div className={cls.importBlock}>
                        <div>
                            <p>Подготовьте импорт с специально</p>
                            <p>подготовленного файла</p>
                        </div>
                        <Button>
                            <ExcelIcon />
                            <span>Импортировать с Excel</span>
                        </Button>
                    </div>
                </div>
            </div>
            <div className={cls.tableWrapper}>
                <table className={cls.table}>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Наименование</th>
                            <th>Бренд</th>
                            <th>Модель</th>
                            <th>Кол-во*</th>
                            <th>Ед.*</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <Input defaultValue={'Алюминиевый профиль Т-образный'}/>
                            </td>
                            <td>
                                <Input placeholder={'Бренд'}/>
                            </td>
                            <td>
                                <Input defaultValue={'Т 60×60×1,3мм'}/>
                            </td>
                            <td>
                                <Input defaultValue={'50'}/>
                            </td>
                            <td>
                                <button className={cls.unitsBtn}>
                                    <span>шт.</span>
                                    <ArrowIcon />
                                </button>
                            </td>
                            <td>
                                <button className={cls.cancelBtn}>
                                    <RemoveRowIcon />
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>
                                <Input defaultValue={'Краска для стен'}/>
                            </td>
                            <td>
                                <Input defaultValue={'Dulux'}/>
                            </td>
                            <td>
                                <Input defaultValue={'Dulux Diamond Extra Matt  1 000 мл'}/>
                            </td>
                            <td>
                                <Input defaultValue={'100'}/>
                            </td>
                            <td>
                                <button className={cls.unitsBtn}>
                                    <span>шт.</span>
                                    <ArrowIcon />
                                </button>
                            </td>
                            <td>
                                <button className={cls.cancelBtn}>
                                    <RemoveRowIcon />
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>
                                <Input placeholder={'Наименование'}/>
                            </td>
                            <td>
                                <Input placeholder={'Бренд'}/>
                            </td>
                            <td>
                                <Input placeholder={'Модель'}/>
                            </td>
                            <td>
                                <Input placeholder={'Кол-во'}/>
                            </td>
                            <td>
                                <button className={cls.unitsBtn}>
                                    <span>м.</span>
                                    <ArrowIcon />
                                </button>
                            </td>
                            <td>
                                <button className={cls.cancelBtn}>
                                    <RemoveRowIcon />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Button variant="secondary">
                    <PlusIcon />
                    <span>Добавить наименование</span>
                </Button>
            </div>
        </CardInputsItem>

    )
}