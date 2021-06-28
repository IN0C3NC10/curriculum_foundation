var en = "0";   //..seta o status em ingles
var pt = "1";   //..seta o status em portugues

function trans(){
        if (pt=="1" && en=="0"){    //TRANSLATE FOR THE ENGLISH
            en="1";
            pt="0";
            
            //..botão de tradução
            document.getElementById("trl-full").textContent="Português";
            document.getElementById("trl").textContent="PT";

            //..primeira coluna
            document.getElementById("c1l1-t1").textContent="Professional Experiences";
            document.getElementById("c1l1-c1").innerHTML="<span class='bold'> Mr. Zé's Little Shop</span><br> Position: Attendant. Deliveryman.<br>Employee in such trade from 04/2016 to 02/2019.";
            document.getElementById("c1l1-c2").innerHTML="<span class='bold'> Boquinha's Pub</span><br> Position: Attendant. Deliveryman. Stock replenisher.<br>Employee in such trade from 09/2012 to 05/2014.";
            
            document.getElementById("c1l2-t2").textContent="Goals";
            document.getElementById("c1l2-c1").textContent="I intend to enter the information technology area, but I still don't have any experience in the area, the little knowledge I have comes from the courses I completed or are in progress.";
            
            document.getElementById("c1l3-t3").textContent="Formation";
            document.getElementById("c1l3-c1").innerHTML="<span class='bold'> Higher Education/ FATEC - Jales College of Technology</span><br> Systems for Internet<br>Start: 1st Semester of 2019.";
            document.getElementById("c1l3-c2").innerHTML="<span class='bold'> Technical Education/ ETEC - Fernandópolis Technical School</span><br> Computing<br>Conclusion: 2nd Semester of 2018.";
            document.getElementById("c1l3-c3").innerHTML="<span class='bold'> Technical Education/ ETEC - Fernandópolis Technical School</span><br> Administration<br>Conclusion: 1st Semester of 2017.";
            
            //..segunda coluna
            document.getElementById("c2l1-t1").textContent="Skills";

            document.getElementById("c2l2-t2").textContent="Informations & Contact";
            document.getElementById("c2l2-c1").textContent=" Cell Phone";
            document.getElementById("c2l2-c2").innerHTML="<span class='bold'> Adress</span><br> City - SP<br> Rua Boca de Salgado, Center";
        }else if (pt=="0" && en=="1"){  //TRADUZ PARA O PORTUGUES
            en="0";
            pt="1";

            //..botão de tradução
            document.getElementById("trl-full").textContent="English";
            document.getElementById("trl").textContent="EN";
            
            
            //..primeira coluna
            document.getElementById("c1l1-t1").textContent="Experiências Profissionais";
            document.getElementById("c1l1-c1").innerHTML="<span class='bold'> Lojinha do Sô Zé</span><br> Cargo: Atendente. Entregador.<br>Funcionário em tal comércio desde 04/2016 até 02/2019.";
            document.getElementById("c1l1-c2").innerHTML="<span class='bold'> Bar do Boquinha</span><br> Cargo: Atendente. Entregador. Repositor de estoques.<br>Funcionário em tal comércio desde 09/2012 até 05/2014.";
            
            document.getElementById("c1l2-t2").textContent="Objetivos";
            document.getElementById("c1l2-c1").textContent="Pretendo ingressar na área de tecnologia da informação, porém ainda não possuo nenhuma experiência na área, os pequenos conhecimentos que possuo provém dos cursos que completei ou estão em andamento.";
            
            document.getElementById("c1l3-t3").textContent="Formação";
            document.getElementById("c1l3-c1").innerHTML="<span class='bold'> Ensino Superior/ FATEC - Faculdade de Tecnologia de Jales</span><br> Sistemas para Internet<br>Início: 1º Semestre de 2019.";
            document.getElementById("c1l3-c2").innerHTML="<span class='bold'> Ensino Técnico/ ETEC - Escola Técnica de Fernandópolis</span><br> Informática<br>Conclusão: 2º Semestre de 2018.";
            document.getElementById("c1l3-c3").innerHTML="<span class='bold'> Ensino Técnico/ ETEC - Escola Técnica de Fernandópolis</span><br> Administração<br>Conclusão: 1º Semestre de 2017.";
            
            //..segunda coluna
            document.getElementById("c2l1-t1").textContent="Conhecimentos";

            document.getElementById("c2l2-t2").textContent="Informações & Contato";
            document.getElementById("c2l2-c1").textContent=" Celular";
            document.getElementById("c2l2-c2").innerHTML="<span class='bold'> Endereço</span><br> Cidade - SP<br> Rua Boca de Salgado, Centro";
        }
    }