import LayoutContainer from "@/components/ui/LayoutContainer"
import PageTopContainer from "@/components/ui/PageTopContainer"
import Title from "@/components/ui/Title"
import { Metadata } from "next"


export const metadata: Metadata = {
  title: "Sauda - Счета и оплаты",
  description: "Счета и оплаты ",
};


export default function InvoicesPage(){
    return(
        <LayoutContainer>
            <PageTopContainer>
                <Title text="Сделки"/>
            </PageTopContainer>
        </LayoutContainer>
    )
}