PGDMP  7    ;                |            book_db    16.3    16.3     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16520    book_db    DATABASE     ~   CREATE DATABASE book_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_Australia.1252';
    DROP DATABASE book_db;
                postgres    false            �            1259    16522 	   book_info    TABLE     �   CREATE TABLE public.book_info (
    id integer NOT NULL,
    title character varying(255),
    author character varying(255),
    date date,
    recommendation integer,
    summary text,
    olid character varying(255)
);
    DROP TABLE public.book_info;
       public         heap    postgres    false            �            1259    16521    book_info_id_seq    SEQUENCE     �   CREATE SEQUENCE public.book_info_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.book_info_id_seq;
       public          postgres    false    216            �           0    0    book_info_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.book_info_id_seq OWNED BY public.book_info.id;
          public          postgres    false    215            P           2604    16525    book_info id    DEFAULT     l   ALTER TABLE ONLY public.book_info ALTER COLUMN id SET DEFAULT nextval('public.book_info_id_seq'::regclass);
 ;   ALTER TABLE public.book_info ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            �          0    16522 	   book_info 
   TABLE DATA           [   COPY public.book_info (id, title, author, date, recommendation, summary, olid) FROM stdin;
    public          postgres    false    216          �           0    0    book_info_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.book_info_id_seq', 31, true);
          public          postgres    false    215            R           2606    16529    book_info book_info_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.book_info
    ADD CONSTRAINT book_info_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.book_info DROP CONSTRAINT book_info_pkey;
       public            postgres    false    216            �   -  x��U�nA</_��W���;��N�rif����z�V�������|�%��Y]US�ō%��������p�Ǥ��1��[�+��?�j\M����X+��C�@;�<���(g�H1y@�=�v$�#RL; N�s"u�\f�X�N6B�`p#�@�M��N�����%|�@�;����� S�Fp�8�u!����+��YH�`��	9�����{9�B�N�$@J�.2$�H�>	��V���Ԓ��E�,�I��#�#J�B Pl�_�DP�m�1F����e�|	����H)�(8����S�g�1��w��f�SRT%�c�-O�e�����9�i`6�Ŏ���ԕ��j2o�fq=�΋[V-\��k'�d���m�G�R�g~r�<�Z�BcUTɿH�dZ��R��S�,���ys=�'��O�6�Ҥ��a�&��5l-����J�5�ҙ��qv`�Dsp�&�Fz�,;��)�_��Nn������-5�<5US�uSϤ�4�t+|8~%k�@�_/���,C!�¥�nɿ�X&�[y�a�g�������`�����     