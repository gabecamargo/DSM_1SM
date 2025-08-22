-- CreateTable
CREATE TABLE "public"."Pessoa" (
    "idpessoa" SERIAL NOT NULL,
    "nome" VARCHAR(30) NOT NULL,

    CONSTRAINT "Pessoa_pkey" PRIMARY KEY ("idpessoa")
);

-- CreateTable
CREATE TABLE "public"."Carro" (
    "idcarro" SERIAL NOT NULL,
    "modelo" VARCHAR(20) NOT NULL,

    CONSTRAINT "Carro_pkey" PRIMARY KEY ("idcarro")
);

-- CreateTable
CREATE TABLE "public"."Telefone" (
    "idtelefone" SERIAL NOT NULL,
    "numero" VARCHAR(11) NOT NULL,
    "idpessoa" INTEGER NOT NULL,

    CONSTRAINT "Telefone_pkey" PRIMARY KEY ("idtelefone")
);

-- CreateTable
CREATE TABLE "public"."PessoaPorCarro" (
    "idpessoa" INTEGER NOT NULL,
    "idcarro" INTEGER NOT NULL,

    CONSTRAINT "PessoaPorCarro_pkey" PRIMARY KEY ("idpessoa","idcarro")
);

-- AddForeignKey
ALTER TABLE "public"."Telefone" ADD CONSTRAINT "Telefone_idpessoa_fkey" FOREIGN KEY ("idpessoa") REFERENCES "public"."Pessoa"("idpessoa") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PessoaPorCarro" ADD CONSTRAINT "PessoaPorCarro_idpessoa_fkey" FOREIGN KEY ("idpessoa") REFERENCES "public"."Pessoa"("idpessoa") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PessoaPorCarro" ADD CONSTRAINT "PessoaPorCarro_idcarro_fkey" FOREIGN KEY ("idcarro") REFERENCES "public"."Carro"("idcarro") ON DELETE CASCADE ON UPDATE CASCADE;
