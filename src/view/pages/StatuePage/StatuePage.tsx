import React from 'react'
import { useTranslation } from 'react-i18next'
import { Description, Header } from '../LandingPage/style'

export const StatuePage = () => {
  const { t } = useTranslation()
  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100 whitespace-pre-line	">
      <div className="container d-flex flex-column align-items-center justify-content-md-between w-100 h-100 mt-2 mb-5">
        <Header bold>{t('Statue.title')}</Header>
        <div className="flex flex-column flex-md-row justify-content-between w-100">
          <div className="entry-content">
            <h4>1. Regulamin aplikacji Zencast – postanowienia ogólne</h4>
            <ol>
              <li>
                Poniższy regulamin aplikacji Zencast (zwany dalej „Regulamin”) określa zasady, zakres i warunki
                korzystania z aplikacji mobilnej Zencast (zwaną dalej „Aplikacją”) i odnosi się do wszystkich stosunków
                pomiędzy Użytkownikiem a Operatorem Aplikacji.
              </li>
              <li>
                Regulamin dotyczy usług świadczonych drogą elektroniczną za pośrednictwem Aplikacji firmę Konrad Hopek
                Development z siedzibą przy ul. Świtezianki 2 w Krakowie, kod pocztowy: 31-567, NIP 9452234681 wpisaną
                do rejestru przedsiębiorstw prowadzonego przez Sąd Rejonowy dla Krakowa Śródmieścia w Krakowie, XI
                Wydział Gospodarczy (zwaną dalej „Operatorem Aplikacji”).
              </li>
              <li>
                Użytkownikiem jest każda osoba fizyczna korzystająca z usług świadczonych za pośrednictwem Aplikacji.
              </li>
              <li>
                Do usług świadczonych za pośrednictwem Aplikacji należą w szczególności:
                <br />– udostępnienie możliwości samodzielnej nauki medytacji,
                <br />– udostępnienie możliwości odsłuchiwania medytacji prowadzonych, ale także nagrań z szeroko
                rozumianego rozwoju osobistego w postaci plików mp3,
                <br />– pomiar osiąganych przez Użytkownika postępów (dostępny w statystykach).
              </li>
              <li>Aplikacja przeznaczona jest na urządzenia mobilne z systemem operacyjnym iOS oraz Android.</li>
              <li>
                Aplikację można pobrać korzystając z następujących sklepów internetowych: App Store (dla systemu
                operacyjnego iOS), Google Play (dla systemu operacyjnego Android).
              </li>
              <li>
                Pobranie Aplikacji oraz korzystanie z oferowanych za jej pośrednictwem usług podstawowych jest
                bezpłatne. Poprzez usługi podstawowe Operator Aplikacji rozumie cztery w pełni dostępne serie/kurs. Kurs
                wprowadzający “Początek podróży”, serię nagrań “Bez lęku”, serię “Na dobry sen” oraz nagrania z serii “Z
                naturą w tle”. Dodatkowo wersja nieodpłatna Aplikacji będzie przez Operatora stale rozwijana, co
                oznacza, że będą udostępniane nowe, pojedyncze nagrania dostępne za darmo. Ponadto Użytkownik będzie
                miał nieodpłatny dostęp do funkcji praktyki wdzięczności, dziennika emocji oraz przerwy na oddech. W
                przypadku pozostałych medytacji, kursów rozwojowych, afirmacji i wszelkich nagrań nie wymienionych w
                usługach podstawowych, a także możliwości zmiany muzyki w tle oraz dostępu do statystyk i śledzenia
                własnych postępów, Aplikacja jest odpłatna.
              </li>
              <li>
                Wszystkie ceny podawane przez Sprzedającego wyrażone są w polskiej walucie i są cenami brutto (zawierają̨
                podatek VAT).
              </li>
              <li>
                Do pobrania, instalacji, uruchomienia i korzystania z Aplikacji wymagane jest połączenie z Internetem.
                Wszelkie koszty połączenia z Internetem, w szczególności transmisji danych, pokrywa Użytkownik we
                własnym zakresie. Stosownie do umów zawartych przez Użytkownika z operatorami telekomunikacyjnymi lub
                innym dostawcą Internetu. Operator nie ponosi odpowiedzialności za niewykonanie lub nienależyte
                wykonanie usług przez operatorów telekomunikacyjnych lub innych dostawców Internetu.
              </li>
              <li>
                Wszelkie materiały udostępniane w Aplikacji, w szczególności teksty, zdjęcia, materiały filmowe i
                dźwiękowe, stanowią wyłączną własność Operatora. Lub podmiotów z którymi Operator zawarł stosowną umowę.
              </li>
            </ol>

            <h4>2. Rejestracja/logowanie i wymagania techniczne</h4>

            <ol>
              <li>
                Rejestracja w Aplikacji odbywa się poprzez wypełnienie formularza rejestracyjnego. Użytkownik
                zobowiązany jest w nim podać indywidualną nazwę Użytkownika oraz hasło zgodne z wytycznymi Operatora.
              </li>
              <li>
                Urządzenie mobilne, na którym Użytkownik uruchomi pobraną i zainstalowaną Aplikację, musi spełniać
                następujące wymagania techniczne. Dla systemu iOS w wersji minimum (iOS 13.4), dla systemu Android w
                wersji minimum (Android 6.0, preferowany Android 11).
              </li>
              <li>Do uruchomienia i prawidłowego działania Aplikacji niezbędne jest aktywne połączenie internetowe.</li>
              <li>
                Rejestracja w Aplikacji jest jednoznaczna z akceptacją treści Regulaminu przez Użytkownika oraz
                zawarciem umowy świadczenia usług drogą elektroniczną pomiędzy Operatorem a Użytkownikiem, zgodnie z
                zasadami określonymi w niniejszym Regulaminie.
              </li>
            </ol>

            <h4>3. Zawarcie umowy świadczenia usług</h4>

            <ol>
              <li>
                Użytkownik zawiera z Operatorem umowę świadczenia usług, w momencie gdy:
                <ol>
                  <li>pobiera z App Store/ Google Play Aplikację Zencast i akceptuje Regulamin,</li>
                  <li>korzysta z usług Operatora wymienionych w pkt. 1.4. – w zależności od rodzaju subskrypcji,</li>
                  <li>zapisze się na Newsletter,</li>
                  <li>
                    napisze do Operatora przez stronę lub bezpośrednio na adres email:{' '}
                    <a href="mailto:kontakt@zencast.app">kontakt@zencast.app</a>
                  </li>
                </ol>
              </li>
              <li>
                Usługa jest świadczona przez czas nieokreślony – do momentu, kiedy Użytkownik usunie Aplikację ze
                swojego urządzenia.
              </li>
              <li>
                Korzystając z Aplikacji nieodpłatnie bądź odpłatnie Użytkownik potwierdza, że przeczytał, zrozumiał i
                akceptuje Regulamin. W kwestiach nieuregulowanych w Regulaminie zastosowanie mają przepisy powszechnie
                obowiązującego polskiego prawa, w szczególności Kodeksu Cywilnego oraz ustawy o prawie autorskim i
                prawach pokrewnych. Udostępniane przez Operatora treści oraz nagrania są chronione prawem autorskim.
              </li>
            </ol>

            <h4 id="4-zasady-korzystania-z-aplikacji-przez-uzytkownika">
              4. Zasady korzystania z Aplikacji przez Użytkownika
            </h4>

            <ol>
              <li>
                Użytkownik zobowiązany jest do korzystania z Aplikacji zgodnie z powszechnie obowiązującym prawem,
                zasadami współżycia społecznego, Regulaminem oraz wszelkimi warunkami korzystania oraz politykami
                prywatności obowiązującymi w ramach korzystania ze sklepów internetowych.
              </li>
              <li>
                Korzystanie przez Użytkownika z Aplikacji w inny sposób niż w ramach dozwolonego użytku jest
                niedopuszczalne bez wyraźnej zgody Operatora.
              </li>
              <li>
                Użytkownik zobowiązany jest powiadomić Operatora o każdorazowym naruszeniu jego praw w związku z
                korzystaniem z Aplikacji.
              </li>
              <li>Z Aplikacji użytkownik korzysta zupełnie dobrowolnie, na własną odpowiedzialność.</li>
              <li>
                Użytkownik ma prawo w każdej chwili zakończyć korzystanie z Aplikacji, w szczególności w sytuacji braku
                akceptacji Użytkownika na zmianę Regulaminu Aplikacji,{' '}
                <a href="https://www.zencast.app/#/privacy">Polityki Prywatności</a> oraz modyfikacji Aplikacji.
              </li>
              <li>
                Operator sugeruje korzystanie z Aplikacji w odpowiednich dla medytacji warunkach, wolnych od
                rozpraszających czynników zewnętrznych, przy zachowaniu pełnej świadomości. Korzystanie z aplikacji po
                spożyciu alkoholu, czy leków psychotropowych lub innych środków odurzających, a także podczas
                prowadzenia samochodu i w innych sytuacjach, w których wymagana jest pełna koncentracja może być
                niebezpieczne dla Twojego i innych życia i zdrowia.
              </li>
              <li>
                Użytkownik może korzystać z dostępu do Aplikacji na własny użytek, w celach prywatnych, na dowolnej
                ilości urządzeń. Użytkownik nie może przekazywać odsłuchiwanych lub nabytych nagrań osobom trzecim, ani
                ich powielać, rozpowszechniać odpłatnie lub nieodpłatnie, czy publicznie prezentować.
              </li>
              <li>
                Jeśli Użytkownik przekroczy udzielone mu uprawnienia, Operator ma prawo wezwać Użytkownika do
                natychmiastowego usunięcia skutków tych działań. Jeśli tego nie zrobi Operator będzie dochodzić jego
                praw na drodze sądowej.
              </li>
            </ol>

            <h4 id="5-prawa-i-obowiazki-operatora">5. Prawa i obowiązki Operatora</h4>

            <ol>
              <li>Operator zobowiązuje się sprawować nadzór nad technicznym funkcjonowaniem Aplikacji.</li>
              <li>
                Nie jest możliwe zagwarantowanie przez Operatora niezakłóconego dostępu do Aplikacji oraz nie zapewnia
                stałej dostępności wszystkich funkcji Aplikacji i ich bezbłędnego działania.
              </li>
              <li>
                Operator nie ponosi odpowiedzialności za jakiekolwiek szkody i utracone korzyści poniesione przez
                Użytkownika w związku z:
                <br />– funkcjonowaniem Aplikacji, w szczególności zakłóceniem dostępności wszystkich funkcji Aplikacji
                bądź ich błędnym działaniem,
                <br />– naruszeniem przez Użytkownika praw osób trzecich,
                <br />– funkcjonowaniem interfejsów oraz łączy telekomunikacyjnych, które nie są własnością Operatora
                lub nie są przez niego obsługiwane,
                <br />– usługami, aplikacjami i serwisami internetowymi, które nie są własnością Operatora lub nie są
                przez niego obsługiwane.
              </li>
              <li>
                Jednocześnie Operator zobowiązuje się dołożyć wszelkich starań aby usługi przez niego świadczone były na
                jak najwyższym poziomie, także technicznym. W tym celu Operator zastrzega sobie możliwość wprowadzania
                czasowych przerw w świadczeniu dostępu do Aplikacji (np. w celu konserwacji, przeglądu, wymiany sprzętu,
                naprawy awarii, aktualizacji usprawnień, czy dokonania zmian w działaniu Aplikacji). W razie zaistniałej
                sytuacji Użytkownik zostanie powiadomiony o ewentualnej przerwie i jej powodzie.
              </li>
              <li>
                Operator ma prawo zablokować konto Użytkownika, jeżeli poweźmie uzasadnione podejrzenie, że Użytkownik
                korzysta z Aplikacji sprzecznie z zasadami.
              </li>
              <li>
                Operator zobowiązuje się w przeciągu 14 dni rozpatrzyć reklamację złożoną przez Użytkownika za
                pośrednictwem poczty tradycyjnej, bądź mailowej. W sytuacji gdy podane w reklamacji dane lub informacje,
                będą wymagać uzupełnienia Operator zwróci się do Użytkownika, celem ich uzupełnienia.
              </li>
              <li>
                Operator zastrzega sobie prawo do zmiany Regulaminu,{' '}
                <a href="https://www.zencast.app/#/privacy">Polityki Prywatności</a> oraz modyfikacji Aplikacji.
                Powiadomi o tym Użytkownika 14 dni przed wprowadzeniem zmiany za pośrednictwem adresu e-mail podanego
                przy rejestracji konta.
              </li>
              <li>
                Prezentowane w Aplikacji informacje oraz udostępniane poglądy i opinie na temat zdrowia, rozwoju
                osobistego, czy medytacji mają jedynie charakter informacyjny i pomocniczy. Nie stanowią one porady
                psychologicznej, medycznej, psychiatrycznej czy oferty handlowej. Aplikacja nie stanowi formy
                interwencji kryzysowej. A specjaliści udostępniający w niej treści nie stanowią pomocy psychologicznej,
                czy psychiatrycznej. Jeśli znajdujesz się w trudnej sytuacji i czujesz, że potrzebujesz pomocy, możesz
                skorzystać z darmowej linii wsparcia dla osób dorosłych w kryzysie psychicznym: 800 70 2222 lub
                Kryzysowego Telefonu Zaufania pod numerem 116 123 lub wybrać się do lekarza, bądź innego specjalisty w
                Twoim rejonie zamieszkania.
              </li>
              <li>
                Jednocześnie Operator dokłada szczególnej staranności, aby publikowane przez niego materiały odpowiadały
                aktualnej wiedzy o medytacji i rozwoju osobistym.
              </li>
            </ol>

            <h4 id="6-uslugi-odplatne">6. Usługi odpłatne</h4>

            <ol>
              <li>
                Usługi odpłatne, tj.:
                <ol>
                  <li>Nieograniczony dostęp do medytacji</li>
                  <li>Kursy rozwojowe i inne nagrania</li>
                  <li>Muzykę w tle</li>
                  <li>
                    Dostęp do statystyk
                    <br />
                    udostępniane są przez Operatora w ramach subskrypcji miesięcznej, półrocznej bądź rocznej płatnej z
                    góry za cały okres umowy. Jeśli Użytkownik nabędzie abonament przez Google Play bądź App Store,
                    abonament odnowi się automatycznie, chyba że zrezygnuje z niego przed kolejnym okresem
                    rozliczeniowym.
                  </li>
                </ol>
              </li>
              <li>
                Płatności Użytkownik może dokonywać wyłącznie drogą elektroniczną, za pośrednictwem platform Google Play
                albo App Store.
                <br />
                dla Google Play -
                <a href="https://support.google.com/googleplay/answer/2651410?hl=pl&amp;ref_topic=3365267&amp;co=GENIE.CountryCode=Poland">
                  Formy płatności akceptowane w Google Play – Poland – Google Play – Pomoc
                </a>
                <br />
                dla App Store -
                <a href="https://support.apple.com/pl-pl/HT202631">
                  Metody płatności, których można używać z kontem Apple ID – Wsparcie Apple (PL)
                </a>
              </li>
              <li>
                W ramach subskrypcji Użytkownik otrzymuje dostęp do wszelkich uaktualnień i nagrań, które pojawią się w
                okresie trwania tejże.
              </li>
              <li>Ceny za dany okres subskrypcji są stale dostępne i na bieżąco aktualizowane w Aplikacji.</li>
            </ol>

            <h4 id="7-reklamacje">7. Reklamacje</h4>

            <ol>
              <li>
                Jeśli Użytkownik posiada uwagi do świadczonych przez nas usług może skierować reklamację drogą
                elektroniczną na adres e-mail: <a href="mailto:kontakt@zencast.app">kontakt@zencast.app</a>
              </li>
              <li>
                W reklamacji lub zgłoszeniu należy podać jej/jego przyczynę i uzasadnienie po czym podać oczekiwania z
                nimi związane.
              </li>
              <li>
                Operator zobowiązuje się rozpatrzyć każdą reklamację w terminie 14 dni od daty jej otrzymania. W tym
                czasie poinformuje drogą mailową o swojej decyzji.
              </li>
            </ol>

            <h4 id="8-wypowiedzenie-umowy-prawa-operatora">8. Wypowiedzenie Umowy – prawa Operatora</h4>

            <ol>
              <li>
                W razie gdy działania Użytkownika niezgodne są z Regulaminem Aplikacji, przepisami prawa lub zasadami
                współżycia społecznego, Operator ma prawo wypowiedzieć umowę jednocześnie
                usuwając/ograniczając/zawieszając dostęp do Aplikacji.
              </li>
              <li>
                Operator może wypowiedzieć Użytkownikowi Umowę w przypadku, gdy ten:
                <ol>
                  <li>Umyślnie wykorzystuje konto w sposób niezgodny z Regulaminem.</li>
                  <li>Umyślnie używa Aplikacji bądź strony w sposób niezgodny z jej przeznaczeniem.</li>
                  <li>
                    Kopiuje i udostępnia treści będące własnością intelektualną Operatora. (tj. wszelkie treści i
                    materiały znajdujące się w Aplikacji, czy na stronie www.zencast.app)
                  </li>
                </ol>
              </li>
              <li>
                Skutkiem rozwiązania umowy jest usunięcie danego konta. Użytkownik traci dostęp do wszystkich nagrań i
                usług dostępnych w Aplikacji ze skutkiem natychmiastowym.
              </li>
            </ol>

            <h4 id="9-odstapienie-od-umowy-prawa-uzytkownika">9. Odstąpienie od Umowy – prawa Użytkownika</h4>

            <ol>
              <li>
                Użytkownik usług odpłatnych Aplikacji jest jednocześnie w świetle prawa konsumentem, który zawarł umowę
                na odległość lub umowę poza lokalem przedsiębiorstwa. To Oznacza, że ma on prawo odstąpić od umowy bez
                podawania przyczyny w terminie do 14 dni od momentu jej zawarcia. Jest to tzw. prawo do namysłu,
                umożliwiające kupującemu zapoznanie się z towarem i rozważenie racjonalności zakupu.
              </li>
              <li>
                Jeśli Użytkownik zdecyduje się odstąpić od umowy w tym terminie, powinien anulować subskrypcję w
                sklepie, w którym dokonał zakupu – (Apple Store lub Google Play) – przed 14 dniem od momentu dokonania
                zakupu.
              </li>
              <li>
                Sklep w przeciągu kilku dni od anulowania subskrypcji zwróci należność na konto, z którego została
                pobrana opłata.
              </li>
              <li>
                W razie problemów z uzyskaniem zwrotu prosimy o kontakt na:{' '}
                <a href="mailto:kontakt@zencast.app">kontakt@zencast.app</a>
              </li>
            </ol>

            <h4 id="10-przetwarzanie-danych-osobowych">10. Przetwarzanie danych osobowych</h4>

            <ol>
              <li>
                To w jaki sposób Operator gromadzi i przetwarza dane Użytkownika zostało szczegółowo opisane w Polityce
                Prywatności, dostępnej pod adresem:https://www.zencast.app/#/privacy
              </li>
            </ol>

            <h4 id="11-postanowienia-koncowe">11. Postanowienia końcowe</h4>

            <ol>
              <li>
                Akceptacja Regulaminu przez Użytkownika jest równoznaczna z akceptacją{' '}
                <a href="https://www.zencast.app/#/privacy">Polityki Prywatności</a> i wyrażeniem zgody na przetwarzanie
                danych osobowych, koniecznych do realizacji świadczenia usług przez Operatora za pośrednictwem
                Aplikacji. Operator zapewnia stały dostęp do{' '}
                <a href="https://www.zencast.app/#/privacy">Polityki Prywatności</a> oraz Regulaminu poprzez konto
                Użytkownika oraz dedykowane podstony na stronie medystacja.pl/aplikacja
              </li>
              <li>
                Operator może przekazać innemu podmiotowi prawa wynikające z niniejszego Regulaminu oraz{' '}
                <a href="https://www.zencast.app/#/privacy">Polityki Prywatności</a>, jednak nie będzie to miało wpływu
                na prawa Użytkownika.
              </li>
              <li>
                Każde postanowienie niniejszego regulaminu funkcjonuje oddzielnie. W przypadku stwierdzenia przez sąd
                nieważności któregokolwiek postanowienia Regulaminu, pozostałe postanowienia pozostają w mocy.
              </li>
              <li>
                Zaniechanie przez Operatora egzekwowania obowiązków Użytkownika wynikających z Regulaminu bądź
                opóźnienie takiego egzekwowania, nie oznaczania zrzeczenia się roszczeń przysługujących Operatorowi
                przeciwko Użytkownikowi. Każdorazowe zrzeczenie się praw przysługujących Operatorowi wymaga formy
                pisemnej pod rygorem nieważności.
              </li>
              <li>
                Wszelkie spory powstałe na tle niniejszej Regulaminu lub{' '}
                <a href="https://www.zencast.app/#/privacy">Polityki Prywatności</a> będą rozstrzygane w sposób
                polubowny. Gdy osiągnięcie porozumienia pomiędzy Operatorem a Użytkownikiem na drodze polubownego
                rozstrzygnięcia sporu nie będzie możliwe, sprawę rozstrzygał będzie sąd powszechny właściwy dla siedziby
                Operatora.
              </li>
              <li>
                W sprawach nieuregulowanych niniejszym Regulaminem, zastosowanie mają przepisy powszechnie
                obowiązującego prawa polskiego. W szczególności przepisy Ustawy z dnia 23 kwietnia 1964 roku Kodeks
                Cywilny, Ustawy z dnia 29 sierpnia 1997 roku o ochronie danych osobowych oraz Ustawy z dnia 18 lipca
                2002 roku o świadczeniu usług drogą elektroniczną.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
