import React from "react";
import styled from 'styled-components';
import Professor from './incorporates/professor.jsx';
import Horario from "./incorporates/horario.jsx";
import Disciplina from "./incorporates/disciplina.jsx";
import Evento from "./incorporates/evento.jsx";
import LivroIndividual from "./incorporates/livroIndividual.jsx";
import AulaIndividual from "./incorporates/aulasIndividuais.jsx";
import Curso from "./incorporates/cursoIndividual.jsx";
import FormContato from "./incorporates/formContato.jsx";
import Noticia from "./incorporates/noticiaIndividuais.jsx";

// IMPORT LIVROS
import FirstBook from "/public/livro1.png";

// IMPORT LOGOS
import UdemyLogo from "/public/udemyLogo.png";
// import BradescoLogo from "/public/bradescologo.svg";

const Main = styled.main` 
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 100vh;
  @media Screen and (max-width: 1080px) {
    width: 96%;
    margin: 0 auto;
  }
  `;

const BigText = styled.h1`
  color: white;
  font-size: 2.7rem;
  text-transform: uppercase;
  @media Screen and (max-width: 1080px) {
    font-size: 1.6rem;
  }
`;

const Content = styled.span`
  color: white;
  width: 67%;
  margin: .33rem auto;
  text-align: justify;
  line-height: 2.7rem;
  font-weight: 300;

  @media Screen and (max-width: 1080px) {
    line-height: 1.8rem;
    width: 80%;
  }
`;

const ContainerLivros = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 67%;
  gap: 1.1rem;
  justify-content: left;
  margin-top: -3.8rem;
  @media Screen and (max-width: 1080px){
    width: 83%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }`;

const ContainerAulas = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 67%;
  gap: 4.1rem;
  justify-content: left;
  margin-top: -3.8rem;
@media Screen and (max-width: 1080px){
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}`;

const ContainerCursos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 67%;
  gap: 4.1rem;
  margin-top: -3.8rem;
  @media Screen and (max-width: 1080px) {
    width: 88%;
  }
  `;

const TextCurso = styled.span`
  color: white;
  line-height: 2.7rem;
  font-weight: 300;
  text-align: justify;
  @media Screen and (max-width: 1080px) {
    text-align: justify;
    line-height: 1.8rem;
  }
`;

const Hr = styled.hr`
  width: 67%;
  @media Screen and (max-width: 1080px) {
    width: 79%;
  }`;

const ContainerContato = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 67%;
  gap: 4.1rem;
`;

const ContainerNoticias = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 67%;
  gap: 4.1rem;
`;

const Modelo = ({ text, content, newcontent, showP, showHorarios, showDisciplinas, showEvents, showBooks, showAulas, showCursos, showContato, showNoticias}) => {
  return (
    <Main>
      <BigText>{ text }</BigText>
      <Hr />
      <Content>{ content }</Content>
      <Content>{ newcontent }</Content>
      {/* PROFESSORES */}
      <div style={{display: 'flex', flexDirection:'column', width:'67%', gap: '2.1rem', justifyContent: 'left', marginTop: '-4.8rem'}}>
        { showP && <Professor link="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4356277P7&tokenCaptchar=03AFcWeA6trEVTKZntCTQNXSbWZt28Z7dErIkslqpnfz-23wzpdrv86I15pudVPTqgxSEoqWdeyEuTsjPKwfnsOZURO0chN816m_b4_f952lBX_OrFFXTFSs-ZUvkL_crnqSXnq6XPiEAk3EVNcoJkWHfz6Qi6Kde5a0WpdctT5R7O-Mdv6mI5i1y-XQIaQEm6KxErFik78XLuxE5wTDqDZXyrI_glQ78jqLR4D4WbYFWk3ZFwK9ABc9E8RGRep8uY9Sl0Z2U1d2U-RhZdZDVs8WGN61xFjalQFpPRu3K2MqBeSPlDeD_hI9T5LrudukFjffg4xNgm9nXStJHyaUg81uRZor_1nNcMdbMWIJlGUpIllKsvBT27w2QU-G3X7tiB6wu4OoMyjmt_CNJ67A2IpkNTokfRMoLH6mvkCfQfvOLnGFSlD-Hl0GtBxekogbHV2odeW7_x-yC4YAueahQ1xhJBBnsZCtATSBEpK0l4ulJn_WGTWiAVbexG6gnY8NgGVCvpxA-1rXsgIzeTFmlx_TNs-feRw0H1d18454qBml2eSvgh-z-cKe6W5ixBIBg9g6jFvYe2ND6o5w-mjKS4SwPnADajX_d4Jb450CNmeL4Efja3eicJGGtePkKYhVlD9EBqCi0xtuHfAbsdDr7eQbpfJeO7UWydenaF6NXVrx_CrvTUe1AvCZC0CrfyzEResc3qKFtdon3sUdk3Bi0qG7eq627jJ4PSSTwMGdpXBSYD1xgGfd7ExGuX8A4eLhD6O_7QTns_3HUByBKhoXqP9XqXIl8BkZE_7EAmgL49wjBotpqQW86_gsGQmmK8lw7htUqnrpaJ6bE38q0meF2nDh_V6J-lzFXcErp4F3UXc7aC38voKWPVHL9GQPxRN0_gljA5JTsC7WiJEDJ0mK6uEnWqg0fQLQM8Mw" nivel="Mestrado" nome="André Geraldo da Costa Coelho" disciplinas={["Administração Financeira I", "Contabilidade Básica", "Métodos Quantitativos", "Empreendedorismo e Plano de Negócios", "Fundamentos de Economia Financeira"]}/> }
        { showP && <Professor link="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4266179D5&tokenCaptchar=03AFcWeA4zmVHVrtmC5t-NdScq26gaiACAZA473NfNikfi5UWVfWsagETNVRCHZtFeXM8b00uMVLG_aSxdYFezv3SyW-UwN-ZI_iYTMAm7V2npyAtmlAGSLivU0yrp9G5RuyGoFia-YAcxqRsQL4Z5H6fav2sZxbKhgOFp_rUO1mV81lHitP3EDhReW8GDSN5WoQnhsVhlM41J4QmF39pr6O8Es74mhvkpJ9U5T0kmv-I1Gsw86a7TEYZSV-FD3EbEW5JPWz-0D5cHZ8Ctdp1ooBPaicCyDPdfKivVhh5egOLTcr0cBR6K1GoRUCnTNBEYN4R20IGFg2hwPZhqQXlG3JIsggK8h-laLfbWcvUM1rVi0OxE8ahOzWbtlRjCUsdyHPjw2AITDJocaoJSa8U20yS_ExXqMqA9Zuw9KZJ2jiNkVA9-UKom2kBjwtJIUwyrPDq9EgI8q21UdMczNXqKbtrJqLPImT3TTeTKq-bYCAKfzqerWEgrSm_hVsdji6lcRHdIDeX_zJsmUiSq0q_knR_xA6gp3Vdzd9bqotU0mh2YKBkUuNMskYKaIuq0FnxNkgtz82mBcHPU7R9GiCOTig-6dbX7e5qbpVnOw2PViavlWcqbcF8_72sbtOEj9jFupYZLJ3N4GZqC9veU9VBpCeu7yd5wDt1xVPy9G2SQDhJbPABx47BSSV6wEafk9uSRJVphuKlHNIBP7BF5fpGqTVSPAcLOispq-wSHmJct5lw2rUjhZ6o-XaiREa0m-njmuGTIJg1NIuEx48lXWj7UTmEadmosLJDTwCprBgyi1HxbPu-SPIacxn5G77v8Mcc5RCnbWH1XYlYA1VnvNFzjcNcdQAD4PaBAPkPtSqt5V2msanFXzOP9aAGCFT30dgv-bpVvZ2R086aciwGxdEisuhVwlmIfd9CgFg" nivel="Doutorado" nome="Bruno Oliveira Lafetá" disciplinas={["Estatística Experimental"]}/> }
        { showP && <Professor link="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4254038Y9&tokenCaptchar=03AFcWeA7CdbTp76lMsL9fLm9SHbAjiQ47HwkAwWrJXds_CnmzY6XOGWzOzW1ATeq9gjxe1WIJFm_3o2Rdt312Uyb9dpkJ8wG3K1Tyx3UUq4PpyD8N1q--K9iqe2fG7PsjnFV283HOFmKNSs-rXcgGjrqMON-vNxEZX04MrNK5W5YRW7qn0TzttkZwoWxReZfKXyEmmlxdt-HWbzUsE9nHE9xJZVT1VUFrYJ5No0xyof_odmzAuQwnhUDUoBS4JKy8h87QjUN6fWHMe4YDZ5tzcwZStZLYHPBuqlsJYuXCPjfC1CTeY97YjkYIW0Mo5xWmRW_Bw3Wy_QQdCQFrpehasZep-sqrkKLYjxm-obQfl-X28u9TxSac16X_gl4nclswl6kSVq9uuMOfS3ViHbk_5soSwNe-qLVqQcwf4_pM6x6WElnjGL5fQkKS-i5uDpsh7_A4jhhL5LA9DH8mdMvdgl5Ow_peg_NR0e3MPF2vGiTOdM9nYwIB9IbJEJw-U6PmD9FQlHiaeAjXC1kDU11W05AJJChOUSE5Zt3CxEiWOJSKo9ZG2mezqRqnwXJm-9_g5fUmRJsYGSUSyT-er3Mi4sczbIXQ3iZ4pJXSuhxjOOtHgToaMEYjLlSTwgA6vmBl3zq1BraplP4Uxst0S95ZOcsEWDKC0sz-_eM10WcDg0Mgmoq7U-rht7mxt6ioSz6J_X-O1-A8AQ16xf8uwcvuPo-1W1Ot5V_7IAMFgQbKSSOhYJaOcPoO8RB7xsKV1G299xL47e4Hcxrvw4KP0vGI29IoQbbMkSRAMnCZKUKqScU78JyS1nxPN4DFyY9O9hVFP9Ck8QqIFm6V6KDXre3z51x7V2_WAIeG4t_YTM2VBzYuC-2-djnMlUl6UqoUvqiZV_6K_NmdPQmRGVuvn2mt7G9fEVx1otRCdg" nivel="Doutorado" nome="Cleonir Coelho Simões" disciplinas={["Física I", "Física II"]}/> }
        { showP && <Professor link="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4242949Z2&tokenCaptchar=03AFcWeA7Dlo8PBB-XUfTaHyZFQu2S-dNrQIHGeUdVarxAKVeNoqfNZ5Z-L1iEY_VbhsEDrwyn_qHt5T6O4LSMf0JCrOErI6qpRdY_WMJZzVarZekhBcvOxyTixZpDz_DuwnIMnPekLs9kXXvibYCzGsUYsd7F8BAcDsiFP5Kc0jqKaV3hBvmk8x60SdSWFfniQ_0AWvOuNypKo_3aC-PqeSwtAoJ6Chn3eAxxWFjuLxDuVXeptjWMEmqUqtwDQKzUH39xCMpT871MrkgfwLD06gjqQp87Dl379DtbWsT0J6FFO_Q8lsEvmZDodzYxm1Omu5UeMlKDEDWA34BkfxGYFhPRnt5eu3MWVWmfTJ-TdwnKKMBAHosg3R8FHlsq-DYxv1c3tpgY2Eoalsex-T4Bqai_IAfM3TzyuZYorUJVrL3EGB8a5Ux4F2Vf2o0z0iTTTsrLTled-ZVeG1-xrngfFO-lQo57xjPsnl9nBQlyWcv5maYMrbxugEf4eOThPSu5l8RcFzh47gVC1vKxVKohVg8Fz4XtQCA8NLtKROTNKhllSWe8Yqhh0aYpqP_uQEXKb8YawDpiB7XcbbId51qtZkPa462d58UzCyqtIMddVS2gnz-38gszGTLFfCVL1qlAHohtHMkRlqy4m03JwMXMGgblIlpBboqbEdEieWz9m4znLO2of7S1Y6idFTXnGJrjJWWCMNmHoxGVE35XyznjIXr9odSGMjeaagLJot271Vm6aXtpbytiwWeXVLzpkVH3KwWCpomo9tiF3moJdCOP0GqJArHyWDxPKjXsxW8AbMjI6GiLzqPikwveGiWudCCn1gcMAKaBy5q-fNjQlXif9ml2ksTcAYNjzuw33wsNE4qpJ0iWbemKZ1Ierj8qtzaSbkxAfw1E8waXSP1k-EpAdbh0_MbIrQne8w" nivel="Mestrado" nome="Débora Marques Ferreira Araújo" disciplinas={["Português Instrumental"]}/> }
        { showP && <Professor link="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4201879Z9&tokenCaptchar=03AFcWeA7DICa8krLouPBgIlIGA8n9F_X126mrDfrGjaUZSjbOoHB_B4TgQPP-0hU_pB7al5SZKBdsWBqTiBnpCWfmSIB8BorSt9xEgGX7D5nukjW_MV6qK5xB8RIJejvw3SEm4HZjSo6wbVZk6yWeQ_BEaYFrB8Ak4b4jxxUOwEXTK06L1YumOKFHHwMsSnjiF6IKk4w7qSQBOdMk5uXuTp71gyBS7mpAm2IBMsT5oH_0_3Y2b62IQ8EA-TFrWX1Ns0DiAPGGbx5jhcJPOU7dxsXgO_gukkPlJjyXDlkzTJ5XnbEVdeqNjKhyfGBozpeeBe0E6p99KqUK8xhcVOSZmZanbmRMZnVVJqF09VYKjlHZoBt3DHDhv95N198z0F38CxLdOER5MZiYb_PByb4etbtu2Gm1lsCSrQE0S0W3k3UrgQUfra3SAWZDgRd3T2AOpUSZhew-adBZn-dc5P4fJXUIbIITzWF9N_PotE1AZUmKFpKcXIiEnmqfZC08yh8ZhTjWpVp3rk1x3mdRjZ-56OFHrwGQQIabtxaYB09UQNX10N6DbTC0e5ZUDe_qYE-yjg1k5lmaJ25808pvTUK8gqRn2FCHTLmyKJi87cC2QHokfXx84ZzZlJ_c4sKhw0XiD977dMBh7DQ6MEGLycHoaCxugovtK2cF6YCEapWNUqoK5N18kdjhbODMqLOQqCAQcXiwGh6ZWVBJ-fBsGCVBfeZGlhF7dy2xwjIPrqlnGh2JsVP7T3oNhTqxskLhwScVDvvj1Xvh7neAxoqEeJ2G-oMVLRJLctgFaI_22DFUEBVCz1Kj8ixGZIPzsuMdzBa8MrFzavpiZIjU5wHjVk2rIqNOZO5DyOhZdah_AnrjOUPRiVILJK6BV4iTuAH4-n6LwHkjMGwngpVp40vlA42fWB4bsVgx-n0wmA" nivel="Mestrado" nome="Elias Pedro Rosa" disciplinas={["Filosofia da Educação", "Sociologia da Educação"]}/> }
        { showP && <Professor link="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4256478T3&tokenCaptchar=03AFcWeA4KC10O8Olgxx7Taacie6uluYCInnZnk_FRnOC7tCqjCM4pyEwYpWiCYfIOgjoIvLPk1rkS8qBtpezj5Oeu_A1OHrw34fiwkvytzKDegf0AnYdEKbCB-qBSMynWgOZSMFYT4hsABBE6IElJdhBDRcWIzs07E5T2LG9oBM1pCSWrJTBdu8R6IQFB8NaHwejDHZgnl96R_jk1MoHeUZ4HVjReA0QjFLDyL4xLJfoh5JPIyLHPDwnBb1iuyF6S61KoMIxW1HCa-sy5TGJmepj4ActapcAObK5KRLT_DLAHImKVwEe7HL5VFZvAi8iCZtOdpgZyBQvgFFaIzCoA35wirDI6Hd43-cYCbtT5sSYIfg_hNLbH4gyReStqe5CjeQ7fczDtMUcuvMsXAXcrq5Hfu-wOcrLzoYsjkA4NMAO_0kb81_Xv2LlxZzQETJrvfGvqeN5PiuDbSyVd4bOVxBDtco7ys41IhikmA-Q0NSTYyjI9W3tDEKGalBvmnroRT3vXGIa1fnMQtQ0QJo275HAJAuqMFuHR7iiUzKz4qmjZCQ3jt_Tv9yQxjE90654ne5JTOFrrpQ4TwEnCYEJvQcYnuebf0Y4wVsKFSgqK2xAwxPmlWAzyaAk7CBtls0UZqxA1k2ylYqGv16O1u_VNKYoKl1yGdDCUjNWGJv-5LjcCEcOQwrzxokPFegoVR2_IUBws1NzOroyks4_xy70MQnt9kE84Od1bjsOz0C6jPjxbb6Ts46JAtZntYurjrcT0SIMGaQOJrv6wQ0mb8e9NJbAO-XtI-gVaV72Z_PC2wx_ca88F-YpGvAeNpexpn_f2GllKJCUCH76GJnfK34ysU7YkilzeH4jW3uVV4WBE8bIp0AKT_MS_-f7uUphdnXHyMp-GzHaPlihhIXLlUdnJJXsKJQ00uvE8JQ" nivel="Doutorado" nome="Geovália Oliveira Coelho" disciplinas={["Introdução à Informática", "Introdução à Programação", "Introdução à Computação"]}/> }
        { showP && <Professor link="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4276861P5&tokenCaptchar=03AFcWeA5G5euiYEtKH7coy_-DSpVcKFg8LjiRgsyxiCP6hBHbaW-E6qZSxLwAxNWe9htVSYXkEIgxJ6LnqdJn8LOutphS_0kPDpDARbymn1teJ88xXbwWwQkaGehiQ9bE2eDr6ytzsRYeY2VQUpdqiqbKniDqk0OUY8xEIaDcsybcFJOVmAKnr7U2NL3UIjoTWuCFCCCzBXxHtPPgTxv0GpHSjDK9MlJ_9AGFjeivVm25fQJ48tdnWXf1WzUUOIkBVuyqw7JPfklriNHZD04Lr0USXjO8P1uMELFCLah-Zl1a-rPf0QEaEOOO5Yg32nfHemh6FiLLqkW1TmNWzjvcSuoQ2V3M9oDtDn_Oy82M7yUbuWyJb8Du-X-G2L1QKtP18K1HSJY6SsOB7u8nH_2vlYK_WyJzJTGJ9QdmX4lygNtLTDOBALCOL9KeEc9tvGBT78G91opb5QEya10DjU8Iuk4dBYkSqXadel6IhsP3lG4NQkiMX6H7egUhHdmMYfdaBve_opBeSPbKaumhk-85RnOIuaS1zV3J-FMgbXhFpHqaSk0MjGcWrlO9FyWCMThOHuwk9ciyp-zbHEAUi9x8Ak8vOUUQArNyYgXDUUNumM4VimnSC89KY6wWsBQQt0PuIjUz2dy25SBqaNwQS_mQiLoi7olODgZYve9BJuWu6-_1ZRtk2DOAIUzm51woMfbHfVy7wcv4IAxqx9uX4BPWI18jlIvWLBN5TwnSWiz5s04ZxKJXxL2TGiZmCGSbYBsYxsMqOvZxpq4rbdn_NXbyLByctk0Xus7Uud5-nMbztflumPbhdxlWce243z9hqGEEC1JkZ-q72s_LMXLn9eyTGUQKnK9qTNMOidHslIy0AiNqKhzVt8c7VohpURmkiyCu5isO-fZyo0CcU51-ukQhDzVZvPAyTnR-OA" nivel="Doutorado" nome="José Fernandes da Silva" disciplinas={["Metodologia Científica", "Projeto de Trabalho de Conclusão de Curso", "Seminários de Pesquisa em Matemática", "Modelagem Matemática na Educação Básica", "Redação Técnico-Científica em Educação Matemática"]}/> }
        { showP && <Professor link="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4363249T4&tokenCaptchar=03AFcWeA4js7uWr6pFaHTiNukmfcUBHusGft5lUbFCLlQWukjv3hSPQeP7HE45l1sI9NnGiv4ktMIR_b3GpL-oE_vH944a__NPRHlYmcWTwNs-xy7Px2jUyxEjDj5ZCY4GwcvSwTvtP5FU8ecczUOlzLU8kPzUl1pX2eT9x9QsPat4txzOFWbZk8Dmm_URoagUmAiY52HxXlg6OJvwh2r0d1qYZxIOPY01kIIFs96S-oOZ2CjGEHIcAc_1xnrxXlGgkqtOVWgCM1gxZi8SMc-bfklVzSQf9YiHRyUv1_3DjI0-qOPRJ-7V1xlXx_fPc6swaIjTwRhNQEEhht8bO6PzBKNxMdAjpzVSXwN0ygv_QxIKKtBUEqpOYVBiCfXtfHZEQ1uHe3hOOYdiSS4fKEIEQEomqj2ezEQ4D-UG-ilwfSVhmc8sOkAyjYNvGxV13tvNW4Yx8-uLf0wfrcleBxTAcIEll3eozOLV0kWg-88AhS2k0RDvaICiCDxaVF5mEpeMINp8sL0dfceVXNUxTPv86TA_--yLP8QT61jnwmtRYj-OZsULhq64ir1IOMyiBYlH16UjEDo6ZiFd_1KTM0SSB3UbX8Y-zOoJS4-pXhNRtjBj4louYAmcbQ9Ryf3IYsHipTc0p0FjN3wbUbxHKdsWq1EOV2HMmA6c-w5ek6337hS349NmDi7CwDBVZXqglthLvi6_eFrY8nXSsqHHplwsAF0x7Pp7RYlQ7qSaGqSX1KeXCZMLv-VeN4MFd5JgybrkM2ijO-7EI7LHz0KWtBZAaGEuSeNYw4cf_wWIYzC0QDaY_f3HCKx0FvpDDqzNkCRZwaJUYF3onaGCosRku17tbveUaOMBxkNaucB1I3GYhXCh6SwrDIy5zZU7-pD2p9JwS6eROvDmIjoQXKdAUocuHTBCDDg7bWHPBg" nivel="Mestrado" nome="José Silvino Dias" disciplinas={["Cálculo I", "Cálculo II", "Cálculo Numérico", "Álgebra na Educação Básica II", "Recursos Computacionais"]}/> }
        { showP && <Professor link="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4231482J8&tokenCaptchar=03AFcWeA73d2p09Lk5CpfWYHNPWPgZUqjLhLdL1TuAnJ6RBj5ej__fptTv8rwMzqSKQ8vrWMKDCB6d3QbeXlZZZQoLCxbesNK9MoaWGoVaGMbF1m5vFjyVZD9ZHyP7IFVCTE0F4mxburP4ORbppGshQnFJqzRLRNo1SPVefv20Ls_uzZIa_40TPu9jAWwgYCMOiaO8CXnXuBuikXPVLnZse9FjAFW3uGl2KeJPMezLRRnxokYx2pLvapVZLw8IbwcrJ3MchCSuBX0d1VWhPjIrQevlJrtY0A-9V2uNYlr-RqoyhNnbl6sCjhlYxJaQTV4kKgyFKOic5pn6DPaTUH7T-RVO5Ioy-RB2ycG0TcLTlURFifQ_h7ikcRgNHd0Y6z4iGjeYVs4UtPrG2jkQYNzIU3272uEF0yoelDo-F-UdoEJ3IODThNitXpC9pmruRqpZjrsJBKhAyZvgmj4qcMfq6fhsS8S3tiIT8tOaA6Pmp15OMdcIpdXg7gioXbXAcpR_Pxrv7QvVGIlwIdsfO5UYD_j_u1pUBE4m1dr27moWuUHWD7kpONWDmX8tsRHkXE7zPj8rcqoC8-IVFkezzYFLWjScuKsyd7669pGmYVcFEPtUuuBk9_wZnYA5Gx2irsrEmqfMjcxb9-BX8DYJE1892FyZuUhR7FrytWH1VcjoT9nReoXzqpHM0hlEuJP71S60rvbveQ1vPpdbEQvVkgTJwMH_e5WESVr99PKLkZfhMb1_RzvSaRcxi8SDowO2hOjAInrDZxejf5eK9jfj8P_djpDcCI_aKijydyaK0GZWTS304syXs7FjXTuDPwJb8zXd1KoGAIuoOEC55rMyKoSizmfj1J0MVGm00q7jh-IIKn9IlRcWKldvAVxAE4xJVqGukfWeprQMEjGuWVJy9coPP_FTIRLMOaPgiQ" nivel="Doutorado" nome="Jossara Bazílio de Souza Bicalho" disciplinas={["Resolução de Problemas", "Investigação em Educação Matemática", "Formação de Professores de Matemática", "Ludicidade no Ensino de Matemática", "Metodologias Ativas de Ensino"]}/> }
        { showP && <Professor link="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4478404U6&tokenCaptchar=03AFcWeA7XVWhdFKOQa2Ut8-KsJCuOeKidT2_thZi07P4IOr1th9vq1CqESNF8xEOcuzGbbt_rG7bIhStioPLy8TCiU1ttObZFMe5g6QupZf37Z-aQDrPEmcZs7_Fd6wJdIBRmPPwc-hvfe1tzV26BDmIqQj9aciR239jrg_5LfFqlvqtTZ957fVqIhyHJHw_D_CAdLU7_R49hqddgl-YjDsOmDc_ouvK8Ou0XPNfjh6mNdNAf3X5glxMTKJLH95YBJkL1AjI1e0JecjxLqxv0VDTQ54BgVEm2hyW7GjaVOyRk09b0Nq5rPq2J-XnWpxPbqcoiKWaxWha7G6kZNHM-KgV2TldX-IajOTsyuF160oJt-cMX3J3qj5XdskvyRYg-WheNZTgwogqHK7wEnyz6pT-SFTzX0ZZAFfssC8UIwpGq2V2ka4HIaNpbIczOtWV0J9U0kYlm2h2FmxWo7zpLILwhzNbnZGwS2o5Gt5_BTofBWImgAQv6aJNI9RcfMRih4txrJCGWfusOseeQ_WIgojjf_OOibH3hHApRBz-wdCIdwfqz1SHIDdHRq8Qjm8iHlT_lamxg3DzqsnKtVH-0g9G9dUJ11SgnWh7LcpydJhqANqGMRcCiWjZqNzFa4c_KERLQT6MfSUTOnt2I26kJALJQ4bIwTmvgARqpd6vUDBd79b2sZoNJC0sLRyczp00Cpe9RCB_hPX6NJlifruOA_uUGk26SMlTDGwgQVweNLhT4xRzJvOI9qXKhxzEla2p8fAINp5Q3EFXZ81DGLNPwS-5Hzi4S90qrqtz39CrNgqee5qKrNghEh10VdWKcTV5K1Y7DwP9DO75uMA2Jg8tYwq6rKn4HtMsZp1fPOupekJ8w25SO5iwiLjfu4wz36Tr8WSMBPLDAXn6wB2w8d1nJ-hjJhfvYoRoAUg" nivel="Mestrado" nome="Roseana Moreira de Figueiredo Coelho" disciplinas={["Funções de Variáveis Complexas", "Estruturas Algébricas", "Modelagem Matemática", "Fundamentos de Análise"]}/> }
        { showP && <Professor link="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4461837A7&tokenCaptchar=03AFcWeA4XfZEiX_sGAFF5s85drOp7SoUGFhApZwWCAqviN6L6PNTuQ3Pku0kiPmRYwmYmhLFdUMHEqvfOFzeGXRf8b-BCLanSukEeHjMyK-4XdrIynMnj6lpoFZYeJB5S_FXAv8r-83cFU8DduXEqWWB819KYKXHqPog0oKy_EsdwsNrIRnSt8yvH7zLAQw9RWpcSncDh-TaZYJBfAiCy87qU0LZvWRejeQiUPlsiFJAvp8wLWSMbc8SQsO9Sx4QVcJayj6Wx0isPkIdr3sX9Nh0PlbN5-d9gOZxigs7_57fvJUtHnuIrn4Hy7k-xiy4PR5vSAXHCLCiIibMDozvqGQv67rTv3VzAzNiRvGCiGDMwcmh0VK2hx2_NrEJUmsHiGTgRbj1PvmQcu4FItgM2o-Tet_23VpaViMvnE7g3ukd1iaedNuxBBJOvKgijwefs0SVyBkY4U9a131k1-f8kW5GagVwXloDmGQ4AJQwWtRxJnPQfl1WBzCG6WEVrbJg1uzRmqJrkrlpYJzCMsiH-6GfoxJtsW6gcOgwXVuzHwgErxjezKmCs5dWbsMiiK0BJx758G8YuIpzfVwgfWLLFOJhokXftFi2v_Sgs44tf6oyLxooJwcwWl5k3F3FMnz_wFSFddzosfM-nrqJRhbp6Ns0vxYZdqjmGvXfSnNxBp-etv3ytJaqlbWUn2hhdV5_0M_uecc7aE8TRIlcz9OPwjhAgGMT8tB-hjsiGVRgS4rldp-TIPr0Q4COJf_m76kNRVsqYakuDeywyVyEjlTdv-enWLoCHLLqsxSts-CGhfT2sRQbSlnFSArSYIeIrlhAXo9vuJiaijUCpxxDPmmltYAyO8WzJNXixdyLU5g9FTadIbfpXSsEkx6kuAQ1rKVmbSfukerenwKJshzmSb8Ka493UIxYK5PSEjg" nivel="Doutorado" nome="Sandra Regina do Amaral" disciplinas={["Antropologia da Educação", "Políticas Públicas na Educação Básica", "Psicologia da Educação", "Didática Geral", "Libras", "Gestão Educacional"]}/> }
        { showP && <Professor link="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4233748Y9&tokenCaptchar=03AFcWeA5hCa4HU2v7XqGTFFx7jGQiTZpQ-KhuBBZ7MPBHiiVOdBikcs2tSayR2h07fnNeDIdt-pEldwYOdoDbQ5v2PRYhAYrk9vVMT1KG9nprtxdFBT8-xvEROAX7H50qQRigW7oZDM7Vv-5lgKVFA7CCBxzLy_BHiarz16rYQLtW7eTQoF_aXCF5f8tB3qwIHV9dS8KWoQi0gnPng_sdYM3KCTT0Bqy29CVOdAyoA9acIkZ6y90A5jCzTASWvOqeMHsxI04bpZPFvUhA7PyQ0MRVwsoiKzqyPMyYbIpprfqQLSwemSWdJ2wFmBb-z6DGBT-Zrvu0nHDIVQmh-8ISpAyp8pTrB9uunF88xxor-mGcdpC50VacLAM-9uA-5Xs-nYFm3aPKfnjTj7jzAXfrSG1eDIEUycN8lbqxMnfZQA_7M2lO1nIiiFWMrvblRPMuB4233JPYH4yGo1bDrP3Bip-Sf58RuWLJKAqoklMNml9zF2bvvD5lcsXDFt7BzrrCEMSJIPUA21A7mjwouqgs9mG8jM8VTT9w0DibhPkQL8wuHXE6IpSO_NzRP3Od59BBsDoS5y0Pj3BO3zKjMyjsuJ3C3fWli8b8TerX2NWI302RFSZNrIkQVkJAv0kJM7kUSecNK0ciTsW8rKUqN-GxZTPRk6BrsD9h0dGkrvB0OJVYGsBbguM0tEsskmZ6u9usIK8SZqpmc83cQROcG7r2ZLemA_gdXmAzFLKed1UZ-ZnifDojFF-4VXiSwpKdNapSiEhXxir0Km862DDHR2qVLPzIlaWVtXt4eOQm8sy-LX4rez_ARQUlhtO_-0peHJJvxOXgYhM2-5QP1SeUMBCAnmAEm3cIzdbtugYfiR7GZgbpm9JdSmY3o0K7sSl2HNwnBrDHYddBiygeKdW2O93LzmHL36QUBzbTwA" nivel="Mestrado" nome="Sandro Salles Gonçalves" disciplinas={["Ensino de Geometria e Medidas e Extensão", "Ensino de Estatística e Probabilidade e Extensão", "Tendências em Educação Matemática", "Pesquisa Operacional", "Intervenção Pedagógica em Matemática e Extensão", "Educação Inclusiva"]}/> }
        { showP && <Professor link="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4373968T0&tokenCaptchar=03AFcWeA7Dco4gRORGAnnmNTCV0yHLVdDYfBL9ZibARbggdNTIW8O0klrB2ZoBoi-ubyauTtJPRpVJ0iw4i5H1qChPsa4AZ02pfM-9QlHafDjgHTaeCf2aHXECop6QwFS0y8S-koJ-lfbhlREHQsEdHN_rbCtO2uSOqOjJbLv7LNFAORUMr5GUhlAlwVhpnfjvMsomMVzlsK6EXTb8F9UFqXCkkSwCEiBf-DtYtEvsc3OLPykClwyC0cIqcl4nCix8A1K1ByOfWWnPQbQzBxxPvAyjABNa6-825PcYlkCdiGpOlTfSFsICl5S3o82A937uWFXpp0m0CFKOQYpZfkk1NEW6h94h7eLLIvhp_ngn5NVP2XDioQyG392U5wpRXkUDYOHeGq8bTIZTlWWzvoVjNdYgL8cEI4sRhDRu_Ved7kkNfOFo6VUqUoXLL4W3r4LPTCKaXbLYoBSEFqfC_t7uyc8n02xOap_T8BvmAvWSDMn1jQd35u5aeq0H5q9YzXCJ8uewXfL6HfcvM1qQYXYKaUHIUd-FB0HDs7w2d_hU6NMERF1eZkd3mwEhWxc0PnzwRgYqNuQqKcpRIdvD0jW5qdfI6MGYDZD6AmpyGpCs6eZLsge_NZNwMu4BZ-dqZiHsCfInEPeuZqd9yaM65rLByERJqiOjI4nQcJ2nzUvK-BJSIDwNHFW2x--q0xQQgkaMDeZkor9BZtwaQKbRMZodJkxytgmC67AL4J7Bumy2rQvNdygkKNCxJQuuqt4zNT93BVP3MB4Mhq12HuBO7m8eegzbFIxFlWXMuisWilWkgYoacaGN4AcHNYpIc-_nSjTc6tKmuO6kZ5QI4PlDnNv4dT9G2gOZjph8R2FHSOf14e3CfAzpGgBvq-oBnVzUDzSAGh97DsMijbe4Mv0MbsNYvf6nhTU1HUvRow" nivel="Mestrado" nome="Sérgio Felipe Abreu de Britto Bastos" disciplinas={["Ensino de Números e Álgebra e Extensão", "Laboratório de Ensino de Matemática I e Extensão", "Laboratório de Ensino de Matemática II e Extensão", "Equações Diferenciais Ordinárias"]}/> }
        { showP && <Professor link="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4361211P0&tokenCaptchar=03AFcWeA7Pc9xZaUdoFaZTPsr80k22auZlP8wBBgVVMeGVnaeVO9bN79U-h7Si92XlpnFTTXlixckhwqOrCU2Eg53ri5imAmlNmRoHIzdZ1Lr6YXW6MqAIChs6SdGAnZ4sfjm4I-0zQyaRH79b8J6IoOM-B3mhSLMxcHQS7cxaQCiZhptVQ9B3xQOM60Vf1ERcv3oHt4rNd1m5bCrruvDq8ATa4Rp6s1V8t1MtsB-B8DxB3q7ZrWMRZOpzcaY6Q3p-dv74Gr2dpoj0VbG5pDZrr_cLGtZjhYCeNsi6hTs5RRSj9R8XpqWTUq8iOQneYNki4sBXMOc4wCb9jsA4hpIRnOMp8XKrPXkF_fhzPs49GhtTWHPFSZcVlC2NteXjDDuWzUjlw0M6C3nmv76y6hGrkpLa3-71cDHsr9aX5kjSo3dY-ZA6dBlSQYRn0jdEKYIimgcxrTZdvUCMs7hBFnXPXULc8KzO6ZYbuZ7UHmVC9KZBynqSW28z0KmcszKT8BX43n7usU_h_NjOuWamBGTAtBJF6Q1rUUD5l3GdFh_JTuKNGuIUmnBNkFpVFXSYONK084SoGde8J-jzXlFR3bp60AOPxozuKUxLzxLNPVyAVttTz12oEwzCnOoeVeMNjLzHEeJJg5znEF-N6hsFw8Q2YI23PffO7729fKoM6EhfgZMbtJg_AC1fhTABWWWTj-XjJB1FXrZcwvPwKqx5HCdKtq9iXiCsevOIsAjXmU5NbG-0bVPdh3uEDH0BekRPgUrj8gj2qFdPd8rPmNH7L1xzJ1dCqKaML1W3_zYayQD5smHVdgQDpzfGyvWwORWdl-jvkfbLAPQoRxMsWFpuYQZag5a9ktGXOPI9tGfD3Ji8Mmp5DDy0pGxivm7xriZ75fht6wVMI6RZHIChi1rnBI2JvEUkMEKKMn4ozw
" nivel="Mestrado" nome="Silvino Domingos Neto" disciplinas={["Cálculo III", "Cálculo IV", "Desenho Geométrico", "Geometria na Educação Básica I", "Geometria na Educação Básica II", "Geometria Analítica", "Lógica Matemática"]}/> }
        { showP && <Professor link="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4434415T9&tokenCaptchar=03AFcWeA4BKyx04cElkr5bdJxmeDvLzIMpCGoyucq4m4_T_WiJeau1Gxdf6on8jBO7kzT_IT47W2H9LownHmjHvHUcrN2O1R-Gpq4UhbL9P502ruXVyjLt5ccDByHC_OC0yYf_6tYu5-qUbAGBM-tKz_V1jrAOE1N_yYHwrykY-qTuJ6ZiDypdVmgw0V2upNxBT9eHTUJHIohkTzjRarclpCk74jCnkyHfvOA2XgmPyJqSyeJ3nX90GH416yXg5vP6CrssYFU3umwgSTR2-IuvgPdHp2f-5EvJEnY-XnVogj3iiBzmy871ac__Zfqfok-zQpUwSwjSmRE9BH1j2mHNfHUydr3nBqxLud2NNMmNAPBE7PElI_JJ7ic_n9w9LCUTTcHBSIPADdocri0ngJULezSRvychN1RRT81JWQ7VD2OtWDdVlypHMvFPxiXe3uDwN9-ZtfWit6-kBuRX4vox7YSE9ryzCMKijhlxuCGdncnx8a5OTJnl6rxh2OtxcH6u9mVB76J6aRy3_HbdrzYkaqqlIhopLXz5WHgXY3ugIFvqPlCNN1ZW8ZrlR041TkoG1fosZ1onelRD8d1HrM64BDS4_kM4jQ5Yy0kiyRnSuP1RIShJXfc5WMuWfSrEBK5raqTJFMlThA4TXxby-ylizn3lQ7c7TKdbFQJHqLZpNhi-5VIik2z3U2ulBpNdgER6YhTPh3RJiGsGl3AsVE9u2vBlqqD5T7OOar7Zy6fZ9sdcTTMzR82dxM8ceXUSpxPGLtOxUt27ELI_MG6Y74UulcHjdhTIgq3NDjXUap_x4KtKJ8-UrV9R02vGbdO6tdiYi6F4ku-MiE7uNHqF1SAABN7OuL4bWKmBEbG_6hHDICa5MGG0emSBQHKTYvgtLy_OyrKM6CD-LjBj1MWrIhyCcCee6YWWY_xh4w
" nivel="Mestrado" nome="Tiago de Oliveira Dias" disciplinas={["Estatística Básica", "Álgebra na Educação Básica I", "História da Matemática", "História da Educação e Teorias de Currículo", "Métodos Avançados de Contagem"]}/> }
        { showP && <Professor link="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4205644Y5&tokenCaptchar=03AFcWeA7stR_slqDC0LUG0kREXA_Toy7kA1ORbjh_3b70Y1xGLdvXXxgM0RGZpwF_47FRq6XBNdjHBuOirnj6QViNl27hOl_UD3bpBmKjSPZyvLjTztl30TCEDkXhhHf1mb6zAvFCRgZcge7e0sxvelpLh-D-QuM9Qb9m_4M8rzc7T_ZnoabfhoNp8iSK8wuJIEwiVIkQBYzowK5N6fiiJHzURXNbUEVbkI9Hy9nZ21I_GhK5Db2xxa_AHEjjbaiHx8kW3TsnnIS7QjZUJ433-eAJI1522coDkwOQglw5D1Kg8TnXVFrbkiYfaxN9KtLyp4_00QkRI8EdUab_eda50awuKnx5FPoAiMF-AVE2T0E2tf3Vun5S0eLVQqN-BLz_dxsQMrhPexyWrP-UhKeAl9uzRDZQ9AxEvUmcUC9JZ_XPZ4_Nw9oakpz8BvaSnMWxMqW6rh5WWpQCRQdA4S8S8D1MoLriRqmyWsyzsGTWc13inQm8EQeQsUG-7pnajaTK9xj9bugL_WQM07gnTEFutITwnIMsOkMcIPc5NJ7Zm9LPYFdY4DPR9fXtc304ZKITEootib5ThVcWRyVlUbwok3ea2REDfzyjW2rSQLr2zTztljVvVB01uvLgRGUM2TcxXJhHgQUaaCEJJ8-rbn2kAJzOo8chro5U59HBje4bomQlOTLALzAuvZ5GuH_T-X-BrsUwVMEzJGm0ksZrSoWRq56JU5eTLJwy4tNINJU8xQPwxru0P5uoympHXrCGS8exD_s5aOB11OpLYtn099f5xBFD2SAm371gs3-gXU-w_JCAAlsXI5FGFT6ydxOxTNPYzuMxrauMCWD39ZHtlZ8cbOSkg0bMgu11GKJy1MaRf73sVDhueK1oLDiX1_YBDmW5nSJsq-JOYmT0Ldejvz37xhBijhKVMqFgdg" coord="true" nivel="Mestrado" nome="Wálmisson Régis de Almeida" disciplinas={["Álgebra Linear", "Análise Combinatória", "Matemática Discreta", "Matemática Financeira", "Teoria dos Números"]}/> }
      </div>
      {/* HORARIOS */}
      <div style={{display: 'flex', flexDirection:'column', width:'67%', gap: '2.1rem', justifyContent: 'center', alignItems: 'flex-start'}}>
      { showHorarios && <Horario myroute="https://drive.google.com/drive/folders/1Cw6GGNgQT-zcEGJUzXBbWm73xFLEA8pM" hor="Horarios LM2-2024"/> }
      </div>
      {/* DISCIPLINAS */}
       <div style={{display: 'flex', flexDirection:'row', flexWrap: 'wrap', width:'67%', gap: '2.1rem', justifyContent: 'left'}}>
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Administração Financeira I" desc="A disciplina de Administração Financeira I tem como objetivo introduzir os fundamentos da gestão financeira e suas aplicações práticas."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Álgebra Linear" desc="A disciplina de Álgebra Linear aborda conceitos fundamentais de vetores, matrizes e transformações lineares."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Álgebra na Educação Básica I" desc="A disciplina de Álgebra na Educação Básica I tem como objetivo desenvolver o raciocínio lógico e as aplicações básicas em sala de aula."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Álgebra na Educação Básica II" desc="A disciplina de Álgebra na Educação Básica II tem como objetivo desenvolver o raciocínio lógico e a capacidade de resolver problemas através da linguagem matemática."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Análise Combinatória" desc="A disciplina de Análise Combinatória trata das técnicas de contagem e suas aplicações."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Antropologia da Educação" desc="A disciplina de Antropologia da Educação explora as interações entre cultura, sociedade e práticas educacionais."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Cálculo I" desc="A disciplina de Cálculo I introduz os fundamentos do cálculo diferencial e integral."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Cálculo II" desc="A disciplina de Cálculo II aprofunda o estudo de integrais, séries e funções de várias variáveis."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Cálculo III" desc="A disciplina de Cálculo III aborda tópicos avançados como integrais múltiplas e campos vetoriais."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Cálculo IV" desc="A disciplina de Cálculo IV trabalha com tópicos avançados de cálculo diferencial e integral aplicado."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Cálculo Numérico" desc="A disciplina de Cálculo Numérico introduz métodos computacionais para resolução de problemas matemáticos."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Contabilidade Básica" desc="A disciplina de Contabilidade Básica fornece fundamentos sobre registros financeiros e relatórios contábeis."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Desenho Geométrico" desc="A disciplina de Desenho Geométrico aborda conceitos e aplicações de formas geométricas."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Didática Geral" desc="A disciplina de Didática Geral oferece fundamentos para planejamento e prática pedagógica."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Educação Inclusiva" desc="A disciplina de Educação Inclusiva aborda estratégias para ensino em contextos diversos e inclusivos."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Empreendedorismo e Plano de Negócios" desc="A disciplina de Empreendedorismo e Plano de Negócios explora como criar e gerenciar empresas."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Ensino de Estatística e Probabilidade e Extensão" desc="A disciplina de Ensino de Estatística e Probabilidade e Extensão apresenta métodos de ensino e aplicação dessas áreas."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Ensino de Geometria e Medidas e Extensão" desc="A disciplina de Ensino de Geometria e Medidas e Extensão explora a aplicação prática de conceitos geométricos."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Ensino de Números e Álgebra e Extensão" desc="A disciplina de Ensino de Números e Álgebra e Extensão desenvolve habilidades para ensinar conceitos numéricos e algébricos."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Equações Diferenciais Ordinárias" desc="A disciplina de Equações Diferenciais Ordinárias trata da modelagem matemática de fenômenos dinâmicos."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Estruturas Algébricas" desc="A disciplina de Estruturas Algébricas analisa grupos, anéis e corpos, e suas propriedades."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Filosofia da Educação" desc="A disciplina de Filosofia da Educação reflete sobre os fundamentos e objetivos do processo educativo."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Física I" desc="A disciplina de Física I aborda conceitos básicos de mecânica e energia."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Física II" desc="A disciplina de Física II explora tópicos como eletricidade e magnetismo."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Formação de Professores de Matemática" desc="A disciplina de Formação de Professores de Matemática prepara para o ensino eficaz da matemática."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Fundamentos de Análise" desc="A disciplina de Fundamentos de Análise explora os conceitos iniciais da análise matemática."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Fundamentos de Economia Financeira" desc="A disciplina de Fundamentos de Economia Financeira trata de conceitos econômicos aplicados às finanças."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Funções de Variáveis Complexas" desc="A disciplina de Funções de Variáveis Complexas explora análises no plano complexo e suas aplicações."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Geometria Analítica" desc="A disciplina de Geometria Analítica explora a representação de figuras geométricas no plano e no espaço."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Geometria na Educação Básica I" desc="A disciplina de Geometria na Educação Básica I introduz conceitos básicos para o ensino de geometria."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Geometria na Educação Básica II" desc="A disciplina de Geometria na Educação Básica II aprofunda métodos de ensino de geometria no contexto escolar."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Gestão Educacional" desc="A disciplina de Gestão Educacional aborda estratégias de administração em instituições de ensino."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="História da Educação e Teorias de Currículo" desc="A disciplina de História da Educação e Teorias de Currículo analisa o desenvolvimento histórico e teórico do currículo escolar."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="História da Matemática" desc="A disciplina de História da Matemática examina o desenvolvimento da matemática ao longo dos tempos."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Introdução à Computação" desc="A disciplina de Introdução à Computação apresenta os fundamentos de hardware e software."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Introdução à Informática" desc="A disciplina de Introdução à Informática aborda conceitos básicos de computação e suas aplicações."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Introdução à Programação" desc="A disciplina de Introdução à Programação ensina os princípios básicos do desenvolvimento de software."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Investigação em Educação Matemática" desc="A disciplina de Investigação em Educação Matemática analisa métodos e práticas para melhorar o ensino da matemática."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Libras" desc="A disciplina de Libras promove o aprendizado da Língua Brasileira de Sinais e sua aplicação na educação."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Lógica Matemática" desc="A disciplina de Lógica Matemática explora conceitos de proposições, conectivos e argumentos válidos."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Ludicidade no Ensino de Matemática" desc="A disciplina de Ludicidade no Ensino de Matemática investiga métodos lúdicos para facilitar o aprendizado."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Matemática Discreta" desc="A disciplina de Matemática Discreta aborda tópicos como teoria dos grafos, conjuntos e combinatória."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Matemática Financeira" desc="A disciplina de Matemática Financeira introduz conceitos de juros simples, compostos e amortização."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Métodos Avançados de Contagem" desc="A disciplina de Métodos Avançados de Contagem explora técnicas combinatórias avançadas."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Métodos Quantitativos" desc="A disciplina de Métodos Quantitativos aplica conceitos matemáticos em decisões gerenciais."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Metodologias Ativas de Ensino" desc="A disciplina de Metodologias Ativas de Ensino foca em técnicas de ensino que envolvem os alunos como participantes ativos."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Metodologia Científica" desc="A disciplina de Metodologia Científica ensina métodos e técnicas para pesquisa acadêmica."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Modelagem Matemática" desc="A disciplina de Modelagem Matemática explora como traduzir problemas reais para o âmbito matemático."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Modelagem Matemática na Educação Básica" desc="A disciplina de Modelagem Matemática na Educação Básica explora o uso prático de modelagem em sala de aula."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Português Instrumental" desc="A disciplina de Português Instrumental trabalha com leitura e escrita para objetivos específicos."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Pesquisa Operacional" desc="A disciplina de Pesquisa Operacional apresenta técnicas para otimização de processos e recursos."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Políticas Públicas na Educação Básica" desc="A disciplina de Políticas Públicas na Educação Básica explora a relação entre políticas e práticas educacionais."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Projeto de Trabalho de Conclusão de Curso" desc="A disciplina de Projeto de Trabalho de Conclusão de Curso prepara o estudante para desenvolver sua pesquisa final."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Psicologia da Educação" desc="A disciplina de Psicologia da Educação estuda como processos psicológicos influenciam a aprendizagem."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Redação Técnico-Científica em Educação Matemática" desc="A disciplina de Redação Técnico-Científica em Educação Matemática explora as habilidades de escrita científica aplicadas à educação matemática."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Resolução de Problemas" desc="A disciplina de Resolução de Problemas desenvolve habilidades para análise e resolução de problemas matemáticos."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Recursos Computacionais" desc="A disciplina de Recursos Computacionais apresenta ferramentas digitais para o ensino e aprendizado."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Seminários de Pesquisa em Matemática" desc="A disciplina de Seminários de Pesquisa em Matemática foca na apresentação e discussão de pesquisas matemáticas."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Sociologia da Educação" desc="A disciplina de Sociologia da Educação analisa a relação entre sociedade e processos educacionais."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Tendências em Educação Matemática" desc="A disciplina de Tendências em Educação Matemática explora inovações e novas abordagens no ensino de matemática."/>}

       </div>
      {/* EVENTOS */}
      { showEvents && <div style={{display: 'flex', flexDirection:'row', flexWrap: 'wrap', width:'67%', gap: '2.1rem', justifyContent: 'left', marginTop: '.8rem'}}>
        <Evento />
      </div>}
      { /* LIVROS */ }
      <ContainerLivros>
        {showBooks && <LivroIndividual link="https://www.infolivros.org/pdfview/9620-calculo-diferencial-e-integral-marcia-federson-e-gabriela-planas/" link2="https://dl.dropboxusercontent.com/sh/d6plg2q4oydvpcs/AAD7fJ0rwbqU9wby5Am99bXga/Archivos%20Infolivros%20POR/Temas%20%28Continuaci%C3%B3n%29/Calculo%20Integral/05.%20C%C3%A1lculo%20Diferencial%20e%20Integral%20autor%20M%C3%A1rcia%20Federson%20e%20Gabriela%20Planas.pdf?dl=1" image="https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg" autor="Márcia Federson e Gabriela Planas" titulo="Cálculo Diferencial e Integral"/>}
        {showBooks && <LivroIndividual link="https://drive.google.com/file/d/1mOAKH8uw2pRFwtqsXNDK7xcd3chDq5oD/view" link2="https://drive.usercontent.google.com/uc?id=1mOAKH8uw2pRFwtqsXNDK7xcd3chDq5oD&export=download" image={ FirstBook } autor="James Stewart" titulo="Cálculo I" />}
      </ContainerLivros>
      {/* AULAS */ }
      <ContainerAulas>
        {showAulas && <AulaIndividual image="https://img.youtube.com/vi/cWBEMN75IMc/sddefault.jpg" video="Derivada - Definição e Cálculo - Cálculo 1 (#16)" canal="Equaciona com Paulo Pereira" link="https://www.youtube.com/watch?v=cWBEMN75IMc&pp=ygU0RGVyaXZhZGEgLSBEZWZpbmnDp8OjbyBlIEPDoWxjdWxvIC0gQ8OhbGN1bG8gMSAoIzE2KQ%3D%3D"/>}
        {showAulas && <AulaIndividual image="https://img.youtube.com/vi/iXUGadXsBd0/maxresdefault.jpg" video="Fácil e Rápido | Aprenda | Determinantes" canal="Dicasdemat Sandro Curió" link="https://www.youtube.com/watch?v=iXUGadXsBd0&t=223s"/>}
        {showAulas && <AulaIndividual image="https://img.youtube.com/vi/4kjaMznGUnY/maxresdefault.jpg" video="Mas afinal, o que é a Derivada?!" canal="Professor Julio Lombado" link="https://www.youtube.com/watch?v=4kjaMznGUnY&t=205s"/>}
        {showAulas && <AulaIndividual image="https://img.youtube.com/vi/JFw9ihPyrMI/maxresdefault.jpg" video="Logaritmos. Onde vou usar ?" canal="Professor Possani" link="https://www.youtube.com/watch?v=JFw9ihPyrMI"/>}
        {showAulas && <AulaIndividual image="https://img.youtube.com/vi/1_HQNgyrVco/maxresdefault.jpg" video="Ângulos Complementares e suplementares em 12 minutos" canal="Dicasdemat Sandro Curió" link="https://www.youtube.com/watch?v=1_HQNgyrVco"/>}
        {showAulas && <AulaIndividual image="https://img.youtube.com/vi/lHqTFWNBtmQ/maxresdefault.jpg" video="Geometria Analítica |Rápido e Fácil" canal="Dicasdemat Sandro Curió" link="https://www.youtube.com/watch?v=lHqTFWNBtmQ"/>}
        {showAulas && <AulaIndividual image="https://img.youtube.com/vi/40GoqH9-uBM/maxresdefault.jpg" video="Geometria Analítica 01: Distância entre dois pontos no plano cartesiano" canal="Matemática no papel" link="https://www.youtube.com/watch?v=40GoqH9-uBM"/>}
        {showAulas && <AulaIndividual image="https://img.youtube.com/vi/Eki_I2VhFDY/maxresdefault.jpg" video="Como resolver equações do jeito certo | Ledo Vaccaro" canal="Cortes de Matemática e Física" link="https://www.youtube.com/watch?v=Eki_I2VhFDY"/>}
        {showAulas && <AulaIndividual image="https://img.youtube.com/vi/8jaLYCGG7io/maxresdefault.jpg" video="LIMITE: a Ideia Fundamental do Cálculo" canal="Tem Ciência" link="https://www.youtube.com/watch?v=8jaLYCGG7io"/>}
        {showAulas && <AulaIndividual image="https://img.youtube.com/vi/DkCHV5Kbx4o/maxresdefault.jpg" video="Cálculo: Introdução e Noção Intuitiva de Limites (Aula 1 de 15)" canal="Professor Ferretto" link="https://www.youtube.com/watch?v=DkCHV5Kbx4o&list=PLTPg64KdGgYhACfQUtMf3CuhWOfLoTf_a"/>}
        {showAulas && <AulaIndividual image="https://img.youtube.com/vi/KTaPZq_SUVo/maxresdefault.jpg" video="O que é GEOMETRIA NÃO EUCLIDIANA? - História da Geometria" canal="Tem Ciência" link="https://www.youtube.com/watch?v=KTaPZq_SUVo"/>}
        {showAulas && <AulaIndividual image="https://img.youtube.com/vi/IBTcgGTtMWI/maxresdefault.jpg" video="OS ELEMENTOS DE EUCLIDES | Ledo Vaccaro" canal="Cortes de Matemática e Física" link="https://www.youtube.com/watch?v=IBTcgGTtMWI"/>}
        {showAulas && <AulaIndividual image="https://img.youtube.com/vi/Z5H7gIVP9qY/maxresdefault.jpg" video="O que é Topologia" canal="Professor Possani" link="https://www.youtube.com/watch?v=Z5H7gIVP9qY"/>}
      </ContainerAulas>
      {/* CURSOS */ }
      <ContainerCursos>
      { showCursos && <TextCurso>Os cursos voltados para a Licenciatura em Matemática desempenham um papel essencial no desenvolvimento de futuros professores, capacitando-os para ensinar conteúdos matemáticos com clareza e eficiência na educação básica. A formação contínua através de cursos oferece ferramentas atualizadas, metodologias de ensino inovadoras e habilidades pedagógicas indispensáveis para lidar com os desafios da sala de aula.
      Estes cursos proporcionam uma base sólida em conceitos matemáticos e técnicas pedagógicas, permitindo que os licenciandos se tornem professores críticos e reflexivos. Além disso, eles ajudam a conectar a teoria matemática com sua aplicação prática, o que é vital para ensinar de forma eficaz. Outro ponto importante é o desenvolvimento de estratégias para tornar o ensino da matemática mais acessível e interessante para os alunos.</TextCurso>}
        { showCursos && <Curso link="https://www.udemy.com/course/excel-para-matematicos/" course_name="Excel para Matemáticos" image={ UdemyLogo } price="Gratuito"/>}
        { showCursos && <Curso link="https://www.udemy.com/course/calculo-somente-exercicios-resolvidos/" course_name="Cálculo para quem detesta Cálculo" image={ UdemyLogo } price="Pago"/>}
        { showCursos && <Curso link="https://www.udemy.com/course/curso-de-limites-e-limites-equivalentes/" course_name="Curso de limites e limites equivalentes" image={ UdemyLogo } price="Gratuito"/>}
      </ContainerCursos>
      {/* CONTATO */}
      <ContainerContato>
        { showContato && <FormContato />}
      </ContainerContato>
      {/* NOTICIAS */}
      <ContainerNoticias>
        { showNoticias && <Noticia />}
      </ContainerNoticias>
    </Main>
  )
}

export default Modelo;