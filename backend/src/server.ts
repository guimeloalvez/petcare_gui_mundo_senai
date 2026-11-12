import express, { type Request, type Response } from "express";
import { cliente_router } from "./routes/cliente.route.js";
import { frota_router } from "./routes/frotas.route.js";
import { estoque_router } from "./routes/estoque.route.js";
import { aumigo_router } from "./routes/aumigo.route.js";
import { animal_router } from "./routes/animal.route.js";
import { cargo_func_router } from "./routes/cargo_func.route.js";
import { coleta_router } from "./routes/coleta.route.js";
import { consulta_router } from "./routes/consulta.route.js";
import { funcionario_router } from "./routes/funcionario.route.js";
import { log_sistema_router } from "./routes/log_sistema.route.js";
import { parceiro_router } from "./routes/parceiro.route.js";
import { pet_dono_router } from "./routes/pet_dono.route.js";
import { registro_ponto_router } from "./routes/registro_ponto.route.js";
import { servico_router } from "./routes/servico.route.js";
import { venda_router } from "./routes/venda.route.js";
import "dotenv/config";
import { auth_router } from "./routes/auth.route.js";
import { ensureAuth } from "./middleware/authmiddleware.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/auth", auth_router);

app.use("/cliente", cliente_router);

app.use("/frotas", frota_router);

app.use("/estoque", estoque_router);

app.use("/aumigo", aumigo_router);

app.use("/animal", animal_router);

app.use("/cargo", cargo_func_router);

app.use("/coleta", coleta_router);

app.use("/consulta", consulta_router);

app.use("/funcionario", funcionario_router);

app.use(ensureAuth)
app.use("/logsdosistema", log_sistema_router);

app.use("/parceiro", parceiro_router);

app.use("/pet-dono", pet_dono_router);

app.use("/registro-ponto", registro_ponto_router);

app.use("/servico", servico_router);

app.use("/venda", venda_router);


app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
