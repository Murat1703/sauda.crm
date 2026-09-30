import Button from "@/components/ui/Button";
import { PlusIcon } from "@/components/ui/icons";
import LayoutContainer from "@/components/ui/LayoutContainer";
import PageTopContainer from "@/components/ui/PageTopContainer";
import Title from "@/components/ui/Title";

export default function LeadsPage(){
    return(
        <LayoutContainer>
            <PageTopContainer>
                <Title text="Заявки"/>
                <Button >
                    <PlusIcon />
                    <p>Создать заявку</p>
                </Button>
            </PageTopContainer>
        </LayoutContainer>
    )
}