import LayoutContainer from "@/components/ui/LayoutContainer"
import PageTopContainer from "@/components/ui/PageTopContainer"
import Title from "@/components/ui/Title"

export default function SettingsPage(){
    return(
        <LayoutContainer>
            <PageTopContainer>
                <Title text="Настройки"/>
            </PageTopContainer>
        </LayoutContainer>
    )
}